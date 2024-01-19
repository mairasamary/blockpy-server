/***
 * Kettle is an editor for TypeScript (and possibly other languages). It's basically a
 * completely pared down version of BlockPy's regular client.
 */

import * as ko from 'knockout';
import {AssignmentInterface, AssignmentInterfaceJson, EditorMode} from "./assignment_interface";
import {Assignment} from "../models/assignment";
import {Timer} from "../utilities/timer";
import {formatClock, pad} from "../utilities/text";
import {CompilationResult, compile, delint} from "../utilities/ts_compiler";
import * as ts from "typescript";
import {decode} from "../utilities/vlq";

export const CONSOLE_API_COMMAND_LIST = ["log", "error", "info", "warning", "table", "clear"];
export type ConsoleAPICommand = "log" | "error" | "info" | "warning" | "table" | "clear";

/**
 * Current strategy for safety is to extract out all the actual execution code to an iframe script
 * that is loaded from the server with appropriate security settings. Then we can just send messages
 * back and forth between the two.
 */

declare class ConTodo {
    constructor(node: HTMLElement, options: Record<string, any>);
    createDocumentNode(): void;
    api: Record<ConsoleAPICommand, (...message: any[])=> void>;
}

interface KettleInterfaceJson extends AssignmentInterfaceJson {
}

export type SourceCodeMapping = Record<number, Record<number, [number, number]>>;
const EXTRACT_SOURCE_CODE_MAP = /[#@]\s(source(?:Mapping)?URL)=data:application\/json;base64,\s*(\S+)/
function extractSourceCodeMap(code: string): SourceCodeMapping {
    code = code.match(EXTRACT_SOURCE_CODE_MAP)[2];
    let lines = JSON.parse(atob(code)).mappings.split(';');
    let lineMap: Record<number, Record<number, [number, number]>> = {};
    const latest= [0,0,0,0];
    lines.forEach((line: string, compiledRow: number) => {
        latest[0] = 0;
        //latest[3] = 0;
        return line.split(",").forEach((mapping) => {
            const offsets = decode(mapping);
            offsets.forEach((v, i) => latest[i] += v);
            const [compiledColumn, sourceFile, originalRow, originalColumn] = latest;
            if (!(compiledRow in lineMap)) { lineMap[compiledRow] = {}; }
            lineMap[compiledRow][compiledColumn] = [originalRow, originalColumn];
        });
    });

    return lineMap;
}

/**
 * This is a modified version of the stack-utils parser, which is licensed under the MIT license.
 * https://github.com/tapjs/stack-utils/tree/main
 *
 */
const STACK_TRACE_REGEX = new RegExp(
  '^' +
    // Sometimes we strip out the '    at' because it's noisy
  '(?:\\s*at )?' +
    // $1 = ctor if 'new'
  '(?:(new) )?' +
    // $2 = function name (can be literally anything)
    // May contain method at the end as [as xyz]
  '(?:(.*?) \\()?' +
    // (eval at <anonymous> (file.js:1:1),
    // $3 = eval origin
    // $4:$5:$6 are eval file/line/col, but not normally reported
  '(?:eval at ([^ ]+) \\((.+?):(\\d+):(\\d+)\\), )?' +
    // file:line:col
    // $7:$8:$9
    // $10 = 'native' if native
  '(?:(.+?):(\\d+):(\\d+)|(native))' +
    // maybe close the paren, then end
    // if $11 is ), then we only allow balanced parens in the filename
    // any imbalance is placed on the fname.  This is a heuristic, and
    // bound to be incorrect in some edge cases.  The bet is that
    // having weird characters in method names is more common than
    // having weird characters in filenames, which seems reasonable.
  '(\\)?)$',
);

//const methodRe = /^(.*?) \[as (.*?)\]$/;

const BASIC_INSTRUCTOR_CODE = `
test("First Test", () => {
    expect(5).toBe(5);
});
`;

function cleanStack(stack: string, sourceCodeMapping: SourceCodeMapping, originalCode: string) {
    const originalLines = originalCode.split("\n");
    const lines = stack.split("\n");
    let cleaned = [];
    let initialLine: number | null = null;
    const restLines = lines.slice(1);
    restLines.reverse();
    for (let originalLine of restLines) {
        const line = originalLine.trim().match(STACK_TRACE_REGEX)
        if (!line) {
            cleaned.push(originalLine);
            continue;
        }
        //console.log(line);
        // Inner nested truly anonymous functions are called eval, so that's a little confusing.
        const functionName = line[2] === "eval" ? "eval" : !line[2] ? "instructorCode" : line[2];
        const inModule = !(line[7].startsWith("blob:"));
        let [lineNumber, colNumber] = [parseInt(line[8], 10), parseInt(line[9], 10)];
        //console.log(sourceCodeMapping, lineNumber, colNumber);
        if (initialLine === null) {
            initialLine = lineNumber;
        } else {
            const best_match = getValueForLowestKey(sourceCodeMapping[lineNumber-2], colNumber);
            if (best_match !== undefined) {
                [lineNumber, colNumber] = best_match;
            }
        }
        //lineNumber -= initialLine;
        if (inModule) {
            cleaned.push("    at " + functionName + " (line " + lineNumber + ", column " + colNumber + ")");
        }
    }
    cleaned.push(lines[0]);
    cleaned.reverse();
    return cleaned.join("\n");
}

function getValueForLowestKey(object: Record<number, any>, index: number) {
    let returned;

    for (const key in object) {
        if((key as unknown as number) > index) break;
        returned = object[key];
    }

    return returned;
}

function improveError(e: any, sourceCodeMapping: SourceCodeMapping, originalCode: string): string {
    if (e.stack) {
        return cleanStack(e.stack, sourceCodeMapping, originalCode);
    } else {
        return e.string;
    }
}

const wrapStudentCode = (code: string) => {
    code = code.replace(/\\|`|\$/g, '\\$&');
    // TODO: Figure out if we should block postMessage?
    return `try { const mainFunction = Function("main", \`${code}\`);
    try {
        mainFunction();
    } catch (e) {
        _kettleSystemError("student", "Runtime", e);
    }
} catch (e) {
    _kettleSystemError("student", "Syntax", e);
}
`};


const EXECUTION_HEADER = `
const console = {
    log: (...text) => postMessage({type: "console.log", data: text}),
    error: (...text) => postMessage({type: "console.error", data: text}),
    info: (...text) => postMessage({type: "console.info", data: text}),
    warning: (...text) => postMessage({type: "console.warning", data: text}),
    table: (...text) => postMessage({type: "console.table", data: text}),
    clear: () => postMessage({type: "console.clear", data: []})
};
function _kettleSystemError(place, category, error) {
    postMessage({type: "system.error", data: {place, category, error}});
}
addEventListener('message', (message) => {
    console.log("Web Worker heard", message)
});
`;

export class Kettle extends AssignmentInterface {
    errorMessage: ko.Observable<string>;
    editorMode: ko.Observable<EditorMode>;
    isDirty: ko.Observable<boolean>;
    isExecuting: ko.Observable<boolean>;
    currentTime: ko.Observable<string>;

    console: ConTodo | null;
    latestOutput: string[];
    latestErrors: string[];

    subscriptions: {
        currentAssignmentId: ko.Subscription;
        submission: ko.Subscription;
        code: ko.Subscription;
    }

    handlers: {
        stdout: any;
        stderr: any;
    }

    createdFiles: string[];

    executionTimer: Timer;

    timeClock: NodeJS.Timeout | null;
    throttleSaving: NodeJS.Timeout | null;
    SAVE_DELAY: number = 1000;
    private latestListener: EventListener;

    constructor(params: KettleInterfaceJson) {
        super(params);
        this.editorMode = ko.observable(EditorMode.SUBMISSION);
        this.errorMessage = ko.observable("");
        this.subscriptions = {currentAssignmentId: null, code: null, submission: null};
        this.isDirty = ko.observable(false);
        this.isExecuting = ko.observable(false);
        this.currentTime = ko.observable(formatClock());

        this.createdFiles = [];
        this.latestOutput = [];
        this.latestErrors = [];
        this.console = null;
        this.latestListener = null;

        this.handlers = {stdout: null, stderr: null};

        this.executionTimer = new Timer(".kettle-clock");

        this.timeClock = setInterval(() => {
            this.currentTime(formatClock());
        }, 3000);

        this.throttleSaving = null;

        this.subscriptions.currentAssignmentId = this.currentAssignmentId.subscribe((newId) => {
            this.loadExecutionEngine(newId);
        }, this);

        this.subscriptions.submission = this.submission.subscribe((submission) => {
            if (this.subscriptions.code) {
                this.subscriptions.code.dispose();
            }
            this.subscriptions.code = <ko.Subscription>submission.code.subscribe((code) => {
                this.saveStudentAnswer();
            }, this);
        }, this);


        this.loadExecutionEngine(this.currentAssignmentId());
    }

    updateStatus(message: string, spinner=true) {
        $(".kettle-status").text(message);
        $(".kettle-working-spinner").toggle(spinner);
    }

    updateFeedback(message: string) {
        $(".kettle-feedback").html(message.toString());
    }

    startEditor() {
        this.isExecuting(false);

        this.console = new ConTodo(document.querySelector(".kettle-console"), {
            autostart: false,
            showDebugging: false,
            showTimestamp: false
        });
        this.console.createDocumentNode();
        console.log(this.console);

        let shell = {
            stdout: (text: string)=> {
                console.log(text);
                this.console.api.log(text);
                this.latestOutput.push(text);
            },
            stderr: (text: string) => {
                console.error(text);
                this.console.api.error(text);
                this.latestErrors.push(text);
            }
        };
        this.handlers.stdout = (data: any) => shell.stdout(data.toString());
        this.handlers.stderr = (data: any) => shell.stderr(data.toString());

        this.console.api.info("Ready to run!");
        this.updateStatus("Ready", false);

        $(".kettle-eval-button").on('click', () => {
            this.evaluateInstructorCode();
        });
        $(".kettle-run-button").off('click.run');
        $(".kettle-run-button").on('click.run', () => {
            this.runStudentCode();
        });
    }

    logExecution(eventType = "Run.Program") {
        this.logEvent(eventType, "kettle", "run",
                JSON.stringify({
                    "code": this.submission().code(),
                    "output": this.latestOutput,
                    "errors": this.latestErrors,
                    "timer": this.executionTimer.time()
                }, null, 2), this.assignment().url(), () => {});
    }

    makeExecutionRequest(studentCode: string, instructorCode: string) {
        studentCode = studentCode.replace("\n\n", "\n//\n");
        const studentResults: CompilationResult = compile(studentCode, ["es2015"]);
        const instructorResults: CompilationResult = compile(instructorCode, ["es2015"]);
        const sourceCodeMapping = extractSourceCodeMap(studentResults.code);

        //const compiledStudentCode = wrapStudentCode(studentResults.code);
        //console.log("Preformated student code", compiledStudentCode);
        return {
            code: [
                //EXECUTION_HEADER,
                //compiledStudentCode,
                studentResults.code,
                instructorResults.code
                ].join("\n"),
            noErrors:!(studentResults.diagnostics.length > 0 || instructorResults.diagnostics.length > 0),
            errors: studentResults.diagnostics.concat(instructorResults.diagnostics),
            sourceCodeMapping: sourceCodeMapping,
            originalCode: studentCode
        };
    }

    handleExecutionEvents(event: MessageEvent, sourceCodeMapping: SourceCodeMapping, originalCode: string) {
        console.log("INSIDE Main Kettle Object", event);
        CONSOLE_API_COMMAND_LIST.forEach((type: ConsoleAPICommand) => {
            if (event.data.type === `console.${type}`) {
                this.console.api[type](...event.data.data);
            }
        })
        if (event.data.type === "system.error") {
            const data = event.data.data;
            this.console.api.error(`${data.category} error in ${data.place} code:\n`, improveError(data.error, sourceCodeMapping, originalCode));
        }
    }

    evaluateInstructorCode() {
        // TODO: Clean up web workers from last time, if any
        if (this.latestListener !== null) {
            window.removeEventListener('message', this.latestListener);
        }
        this.console.api.info("Evaluating your code");
        this.updateStatus("Saving, ");
        this.executionTimer.start();
        this.updateStatus("Compiling");
        // this.assignment().onRun() + "\n" +
        const program = this.makeExecutionRequest(this.submission().code(), this.assignment().onRun());
        if (program.noErrors) {
            this.updateStatus("Executing");
            const iframe: HTMLIFrameElement = <HTMLIFrameElement>document.getElementsByClassName("kettle-execution-iframe")[0];
            this.latestListener = (e: MessageEvent) => this.handleExecutionEvents(e, program.sourceCodeMapping, program.originalCode);
            window.addEventListener('message', this.latestListener);
            iframe.contentWindow.postMessage({
                'type': 'execute',
                'code': ""+program.code,
            }, '*');
            /*const blob = new Blob([program.code], {type: 'application/javascript'});
            const worker = new Worker(URL.createObjectURL(blob));
            worker.addEventListener('message', (e) => this.handleExecutionEvents(e, program.sourceCodeMapping, program.originalCode));*/
            this.updateStatus("Completed!", false)
        } else {
            program.errors.map((error: ts.Diagnostic) => "Line "+error.file.pos+") " +error.messageText).forEach(
                (error) => this.console.api.error(error as string)
            );
            this.updateStatus("Errors!", false);
            console.error(program.errors);
            this.updateFeedback(program.errors.map((error: ts.Diagnostic) => "Line "+error.file.pos+") " +error.messageText).join("\n"));
        }

        this.executionTimer.stop();



        // TODO: Finish this
        const feedback = "TODO: Finish this";
        const points = 0;
        //this.updateFeedback(feedback);
        this.submit(points, feedback, ()=>{});
    }

    runStudentCode() {
        this.latestOutput = [];
        this.latestErrors = [];
        this.console.api.log(`Executing your code`);
        this.updateStatus("Saving, ");
        this.executionTimer.start();
        this.updateFeedback("Compiling and executing your code!");
        this.isExecuting(true);
        this.logEvent("Compile", "kettle", "compile",
                JSON.stringify({
                    "code": this.submission().code()
                }, null, 2), this.assignment().url(), () => {});
        $("#abort-command").hide();
        this.updateStatus("Finished in", false);
        this.executionTimer.stop();
        this.isExecuting(false);
        this.logExecution();
        $("#abort-command").show().on('click', ()=>{
            $("#abort-command").hide();
        });
    }

    loadExecutionEngine(assignmentId: number) {
        if (assignmentId != null) {
            let BlockPyServer = window['$MAIN_BLOCKPY_EDITOR'].components.server;
            let data = BlockPyServer.createServerData();
            data["assignment_id"] = assignmentId;
            BlockPyServer._postBlocking("loadAssignment", data, 4,
                (response: any) => {
                    if (response.success) {
                        let assignment = this.server.assignmentStore.newInstance(response.assignment);
                        this.resetAssignmentIfNeeded(assignment, false);
                        let submission = response.submission ? this.server.submissionStore.newInstance(response.submission) : null;
                        this.assignment(assignment);
                        this.submission(submission);
                        this.parseAdditionalSettings();
                        this.startEditor();
                    } else {
                        console.error("Failed to load", response);
                        this.assignment(null);
                    }
                },
                (e: any, textStatus: string, errorThrown: any) => {
                    console.error("Failed to load (HTTP LEVEL)", e, textStatus, errorThrown);
                    this.assignment(null);
                });
        } else {
            this.assignment(null);
        }
    }

    resetAssignmentIfNeeded(assignment: Assignment, force = true) {
        if (assignment == null) {
            assignment = this.assignment();
        }
        if (force || assignment.onRun() === "") {
            assignment.onRun(BASIC_INSTRUCTOR_CODE);
        }
    }

    parseAdditionalSettings() {
        let settingsRaw = this.assignment().settings();
        let settings = JSON.parse(settingsRaw || "{}");
    }

    dispose() {
        this.subscriptions.currentAssignmentId.dispose();
        this.subscriptions.code.dispose();
        this.subscriptions.submission.dispose();
        this.executionTimer.reset();
        this.console = null;
        clearInterval(this.timeClock);
    }

    saveStudentAnswer() {
        this.markDirty();
        if (this.throttleSaving === null) {
            clearTimeout(this.throttleSaving);
        }
        this.throttleSaving = setTimeout(() => this.finishSaveStudentAnswer(), this.SAVE_DELAY);
    }

    finishSaveStudentAnswer() {
        this.saveFile("answer.py", this.submission().code(), false, ()=>{
            this.markClean();
        });
    }

    saveAssignment() {
        const anyError = (e: any, textStatus: string, errorThrown: any) => {
            console.error("Failed to load (HTTP LEVEL)", e, textStatus, errorThrown);
            this.errorMessage("Save Assignment: Failed to load (HTTP LEVEL)" + e);
        };
        const anyReturn = (data: any) => {
            if (!data.success) {
                console.error("Failed to save assignment", data);
                this.errorMessage("Save Assignment: Failed to save (Logic LEVEL)" + JSON.stringify(data));
            }
        }
        this.saveFile("!instructions.md", this.assignment().instructions(), true, anyReturn, anyError);
        this.saveFile("!on_run.py", this.assignment().onRun(), true, anyReturn, anyError);
        this.saveFile("^starting_code.py", this.assignment().startingCode(), true, anyReturn, anyError);
        this.saveAssignmentSettings({
            settings: this.assignment().settings(),
            points: this.assignment().points(),
            url: this.assignment().url(),
            name: this.assignment().name()
        });
    }

    markDirty() {
        this.isDirty(true);
    }

    markClean() {
        this.isDirty(false);
    }

    saveSubmissionRaw() {
        this.saveFile("answer.py", this.submission().code(), true, ()=>{});
    }

    resetStudent() {
        if (confirm("Are you sure you want to reset your code to the starter code? You will lose your current code, and you may not be able to get it back!")) {
            this.submission().code(this.assignment().startingCode());
            this.logEvent("X-File.Reset", "kettle", "code_reset",
                JSON.stringify({
                    "code": this.assignment().startingCode()
                }), this.assignment().url(), () => {})
        }
    }


    submit(points: number, feedback: string, callback: any) {
        let BlockPyServer = window['$MAIN_BLOCKPY_EDITOR'].components.server;
        let now = new Date();
        let data = {
            assignment_id: this.assignment().id,
            assignment_group_id: this.assignmentGroupId,
            course_id: this.courseId,
            submission_id: this.submission().id,
            user_id: this.user.id,
            status: 0,
            score: points,
            correct: points >= 100,
            timestamp: now.getTime(),
            timezone: now.getTimezoneOffset(),
            passcode: window['$MAIN_BLOCKPY_EDITOR'].model.display.passcode(),
        };
        // TODO: Skipping questions doesn't skip giving you points does it??
        BlockPyServer._postBlocking("updateSubmission", data, 3,
               (response: any) => {
                    //console.log(response.message.feedbacks);
                    if (response.success || response.message.message === "Generic LTI Failure - perhaps not logged into LTI session?") {
                        console.log(response);
                    }
                    if (!response.success) {
                        console.error(response);
                        this.errorMessage(response.message.message);
                    }
                    this.submission().submissionStatus(response.submission_status);
                    if (response.correct) {
                        this.markCorrect(this.assignment().id);
                    }
                    callback();
               },
               (e: any, textStatus: string, errorThrown: any) => {
                    console.error("Failed to load (HTTP LEVEL)", e, textStatus, errorThrown);
                    this.errorMessage("HTTP ERROR (try reloading the page; if still an error, report to instructor!): "+ textStatus+"\n"+errorThrown);
                    callback();
                });
    }
}

export const EDITOR_HTML = `
<!-- Errors -->
<div class="alert alert-warning p-1 border rounded float-right" data-bind="text: errorMessage, visible: errorMessage().length"></div>

<!-- Instructor Editor Mode Selector -->
<div data-bind="if: isInstructor()">
    <!-- Instructor Editor Mode Selector -->
    <div class="btn-group-toggle mt-2 mb-2">
        <label class="btn btn-outline-secondary" for="kettle-editor-mode-radio-submission"
            data-bind="css: { active: editorMode()=='SUBMISSION'}">
            <input data-bind="checked: editorMode"
               id="kettle-editor-mode-radio-submission" name="kettle-editor-mode-radio"
               class="btn-check" type="radio" value="SUBMISSION" autocomplete="off">
            Student Code Editor
        </label>
        <label class="btn btn-outline-secondary mr-4" for="kettle-editor-mode-radio-form"
            data-bind="css: { active: editorMode()=='FORM'}">
            <input data-bind="checked: editorMode"
                       id="kettle-editor-mode-radio-form" name="kettle-editor-mode-radio"
                       class="btn-check" type="radio" value="FORM" autocomplete="off">
            Instructor Editor
        </label>
        <label class="btn btn-outline-secondary mr-4" for="kettle-editor-mode-radio-raw"
            data-bind="css: { active: editorMode()=='RAW'}">
            <input data-bind="checked: editorMode"
                   id="kettle-editor-mode-radio-raw" name="kettle-editor-mode-radio"
                   class="btn-check" type="radio" value="RAW" autocomplete="off">
            Raw Editor
        </label>
        <br><hr>
    </div>
    
    <!-- Raw Instructor Editor -->
    <div data-bind="if: editorMode() === 'RAW'">
        <button data-bind="click: saveAssignment">Save Assignment</button><br>
        <h6>Instructions</h6>
        <textarea data-bind="textInput: assignment().instructions" style="width: 100%; height: 300px"></textarea><br>
        <h6>On Run (Feedback Code)</h6>
        <textarea data-bind="textInput: assignment().on_run" style="width: 100%; height: 300px"></textarea><br>
        <h6>Settings</h6>
        <textarea data-bind="textInput: assignment().settings" style="width: 100%; height: 300px"></textarea><br>
        <h6>Submission</h6>
        <!-- ko if: submission -->
            <textarea data-bind="textInput: submission().code" style="width: 100%; height: 300px"></textarea><br>
            <button data-bind="click: saveSubmissionRaw">Save code changes</button>
        <!-- /ko -->
    </div>

    <!-- Form Instructor Editor -->
    <div data-bind="if: editorMode() === 'FORM'">
        <button data-bind="click: saveAssignment" class="btn btn-info">Save Assignment Changes</button><br>
        <!-- On Run -->
        <h6>Instructor Feedback (On Run) Code</h6>
        <div data-bind="codemirror: {value: assignment().onRun, lineNumbers: true, matchBrackets: true, mode: 'text/typescript'}" style="width: 100%; height: 300px"></div><br>
        <button data-bind="click: ()=>resetAssignmentIfNeeded()">Reset On Run</button>
        <!-- Starting Code -->
        <h6>Starting Student Code</h6>
        <div data-bind="codemirror: {value: assignment().startingCode, lineNumbers: true, matchBrackets: true, mode: 'text/typescript'}" style="width: 100%; height: 300px"></div><br>
        <!-- Instructions -->
        <h6>Instructions (Body)</h6>
        <textarea data-bind="markdowneditor: {value: assignment().instructions}" style="width: 100%; height: 300px"></textarea><br>
        <!-- Other settings -->
        <div class="form-group">
            <label for="kettle-points-editor">
                Points:
                <input type="number" id="kettle-points-editor" name="kettle-points-editor"
                    class="form-control" data-bind="value: assignment().points">
            </label>
        </div>
        <div class="form-group">
            <label for="kettle-name-editor">
                Name:
                <input type="text" id="kettle-name-editor" name="kettle-name-editor"
                    class="form-control" data-bind="value: assignment().name">
            </label>
        </div>
        <div class="form-group">
            <label for="kettle-url-editor">
                URL:
                <input type="text" id="kettle-url-editor" name="kettle-url-editor"
                    class="form-control" data-bind="value: assignment().url">
            </label>
        </div>
        <h6>Additional Settings</h6>
        <div data-bind="jsoneditor: {value: assignment().settings}" style="width: 100%; height: 300px"></div><br>
        <h6>Assignment Files</h6>
        <div data-bind="filepond: {server: server, submission: submission, assignment: assignment}"></div><br>
    </div>
</div>
`;


export const KETTLE_HTML = `
<div>
    ${EDITOR_HTML}
    <!-- ko if: assignment -->
    <div data-bind="markdowned: {value: assignment().instructions()}"></div>
    <!-- /ko -->
    <!-- Body -->
     <div id='ide'>
        <div id='source' style='height: 70%;'></div>
        <div class="btn-group m-2" role="group" aria-label="Execution Control Buttons" >
          <button class='btn btn-success kettle-eval-button' type="button" data-bind="disable: isExecuting">Run and Grade</button>
        
          <div class="btn-group" role="group">
            <button id="kettle-execution-control" type="button" 
                class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                data-bind="disable: isExecuting">
              
            </button>
            <div class="dropdown-menu" aria-labelledby="kettle-execution-control">
              <button class='btn btn-mini btn-success kettle-run-button' data-bind="disable: isExecuting">Run without grading</button>
            </div>
          </div>
      </div>
      
      <div class="spinner-loader kettle-working-spinner" role="status" style="display: inline-block;">
        <span class="sr-only">Loading...</span>
      </div>
      <span class="kettle-status"></span>
      <span class="kettle-clock"></span>
      <span class="time-clock float-right" data-bind="text: currentTime"></span>
      <button class="btn btn-mini btn-xs btn-outline-secondary code-reset float-right mr-3" data-bind="click: resetStudent">Reset Code</button>
      <!-- ko if: isDirty() -->
        <small class="alert alert-info p-1 border rounded float-right">Saving changes</small>
      <!-- /ko -->
      </div>
      <!-- ko if: submission -->
        <div data-bind="codemirror: {
            value: submission().code, lineNumbers: true, 
            matchBrackets: true, mode: 'text/typescript',
            indentUnit: 4,
            statementIndent: 4, noOverwrite: true,
        }" style="width: 100%; height: 300px; border: 1px solid black;"></div>
        <br>
      <!-- /ko -->
      <iframe src="../blockpy/serve_kettle_iframe" class="kettle-execution-iframe"></iframe>
      <div class="row mb-2">
        <div class="col-md-12">
            <button class="btn btn-mini btn-xs btn-outline-secondary float-right mr-3" style="display: none;" id="abort-command">Stop Execution</button>
            <h6>Console (log)</h6>
            
            <div class='kettle-console' style="resize: vertical; height: 300px; overflow: auto; scroll-behavior: smooth"></div>
        </div>
        <div class="col-md-5">
            <h6>Instructor Feedback</h6>
            <div class="kettle-feedback" style="min-height: 300px; padding: 4px"></div>
        </div>
      </div>
</div>
`

ko.components.register("kettle", {
    viewModel: Kettle,
    template: KETTLE_HTML
});
