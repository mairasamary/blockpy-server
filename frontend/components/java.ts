/***
 * Java is an editor (ace) plus Doppio. It's really not fancy.
 */

import * as ko from 'knockout';
import {AssignmentInterface, AssignmentInterfaceJson, EditorMode} from "./assignment_interface";
import * as BrowserFS from 'browserfs';
import * as Doppio from 'doppiojvm';
import {recursiveCopy} from "../utilities/doppio_utils";
import {Assignment} from "../models/assignment";
import {FSModule} from "browserfs/dist/node/core/FS";
import {Timer} from "../utilities/timer";
import {formatClock, pad} from "../utilities/text";

interface JavaInterfaceJson extends AssignmentInterfaceJson {
}

const BASIC_INSTRUCTOR_CODE = `public class Instructor {
    public static void main(String[] args) {
        Student student = new Student(5);
        if (student.plus(3) == 8) {
            grade(100, "TEST PASSED");
        } else {
            grade(0, "TEST FAILED");
        }
    }
    
    public static native void grade(int points, String feedback);
}`;



const FIND_PUBLIC_CLASS = /^\s*public\s+(?:class|interface)\s+([^\n\s\{]+)/gm;

export class Java extends AssignmentInterface {
    errorMessage: ko.Observable<string>;
    editorMode: ko.Observable<EditorMode>;
    isDirty: ko.Observable<boolean>;
    isExecuting: ko.Observable<boolean>;
    currentTime: ko.Observable<string>;
    filename: ko.PureComputed<string[]>;
    runningFilename: ko.PureComputed<string>;

    latestOutput: string[];
    latestErrors: string[];

    persistentFs: any;

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

    constructor(params: JavaInterfaceJson) {
        super(params);
        this.editorMode = ko.observable(EditorMode.SUBMISSION);
        this.errorMessage = ko.observable("");
        this.subscriptions = { currentAssignmentId: null, code: null, submission: null };
        this.persistentFs = null;
        this.isDirty = ko.observable(false);
        this.isExecuting = ko.observable(false);
        this.currentTime = ko.observable(formatClock());

        this.createdFiles = [];
        this.latestOutput = [];
        this.latestErrors = [];

        this.handlers = {stdout: null, stderr: null};

        this.executionTimer = new Timer(".java-clock");

        this.timeClock = setInterval(()=>{
            this.currentTime(formatClock());
        }, 3000);

        this.throttleSaving = null;

        this.subscriptions.currentAssignmentId = this.currentAssignmentId.subscribe((newId) => {
            this.loadJava(newId);
        }, this);

        this.subscriptions.submission = this.submission.subscribe((submission) => {
            if (this.subscriptions.code) {
                this.subscriptions.code.dispose();
            }
            this.subscriptions.code = <ko.Subscription>submission.code.subscribe((code) => {
                this.saveStudentAnswer();
            }, this);
        }, this);

        this.filename = ko.pureComputed(function () {
            if (this.submission()) {
                const code = this.submission().code();
                const matcher = RegExp(FIND_PUBLIC_CLASS);
                let match = matcher.exec(code);
                let classes = [];
                while (match != null) {
                    classes.push(match[1]);
                    match = matcher.exec(code);
                }
                return classes;
            } else {
                return [];
            }
        }, this);
        this.runningFilename = ko.pureComputed(
            () => this.filename().length > 0 ? this.filename()[0] : "Student",
            this);

        this.loadJava(this.currentAssignmentId());
    }

    loadDoppio() {
        if (this.persistentFs === null) {
            this.constructPersistantFs((_fs: any) => {
                this.persistentFs = _fs;
                BrowserFS.initialize(_fs);
                this.setupJavaHome(this.persistentFs, () => {
                    this.setupFileSystem(this.persistentFs,  () => {
                        $('.java-progress-bar-container').fadeOut('fast', () => {
                            this.startEditor();
                        });
                    });
                });
            });
        } else {
            this.startEditor();
        }
    }

    updateStatus(message: string, spinner=true) {
        $(".java-status").text(message);
        $(".java-working-spinner").toggle(spinner);
    }

    updateFeedback(message: string) {
        $(".java-feedback").html(message.toString());
    }

    startEditor() {
        console.log("Starting Editor", this.persistentFs);
        this.isExecuting(false);
        let fs = BrowserFS.BFSRequire('fs');
        let process = BrowserFS.BFSRequire('process');
        let consoleJQuery = $('.java-console');
        consoleJQuery.empty();
        process.chdir('/home');
        let shell = {
            stdout: (text: string)=> {
                console.log(text);
                consoleJQuery.append(`<div style="color: white;">${text}</div>`);
                this.latestOutput.push(text);
            },
            stderr: (text: string) => {
                console.error(text);
                consoleJQuery.append(`<div style="color: red;">${text}</div>`);
                this.latestErrors.push(text);
            }
        };
        process.stdout.removeAllListeners('data');
        process.stderr.removeAllListeners('data');
        this.handlers.stdout = (data: any) => shell.stdout(data.toString());
        this.handlers.stderr = (data: any) => shell.stderr(data.toString());
        process.stdout.on('data', this.handlers.stdout);
        process.stderr.on('data', this.handlers.stderr);

        // Wipe out existing files
        ["/home/Instructor", "/home/Student"].forEach((path) => {
            fs.exists(path, (exists: boolean) => {
                if (exists) {
                    fs.unlinkSync(path);
                }
            })
        })

        shell.stdout("Ready to run!");
        this.updateStatus("Ready", false);

        // $(".java-eval-button").on('click', () => {
        //     this.evaluateInstructorCode(fs, process, consoleJQuery);
        // });
        $(".java-run-button").off('click.run');
        $(".java-run-button").on('click.run', () => {
            this.runStudentCode(fs, process, consoleJQuery);
        });
    }

    evaluateInstructorCode(fs: FSModule, process: NodeJS.Process, consoleJQuery: JQuery<HTMLElement>) {
        consoleJQuery.html("");
        this.updateStatus("Saving, ");
        this.executionTimer.start();
        this.updateFeedback("Compiling and executing your code with the instructor code!");
        fs.writeFile("/home/Instructor.java", this.assignment().onRun(), "utf-8", () => {
            fs.writeFile("/home/Student.java", this.submission().code(), "utf-8", () => {
                this.updateStatus("Compiling, ");
                Doppio.VM.CLI(
                  ['classes.util.Javac', '/home/Instructor.java', '/home/Student.java'],
                {
                  doppioHomePath: '/home', launcherName: "javac"
                }, (exitCode) => {
                  if (exitCode === 0) {
                      this.updateStatus("Executing, ");
                    Doppio.VM.CLI(
                      ['Instructor'],
                    {
                      doppioHomePath: '/home', launcherName: "java"
                    }, (exitCode) => {
                      if (exitCode === 0) {
                          this.updateStatus("Finished in", false);
                          this.executionTimer.stop();
                        // Class finished executing successfully.
                      } else {
                          this.updateStatus("Execution Failed after", false);
                        this.executionTimer.stop();
                        // Execution failed. :(
                      }
                    }, (jvmObject) => {
                        // Native methods can reference DoppioJVM modules from the DoppioJVM global variable.
                        var ThreadStatus = Doppio.VM.Enums.ThreadStatus;
                        jvmObject.registerNatives({
                          'Instructor': {
                            'grade(ILjava/lang/String;)V': (thread: any, points: number, feedback: string) => {
                              // This informs the thread to ignore the return value from this JavaScript function.
                              thread.setStatus(ThreadStatus.ASYNC_WAITING);
                              this.updateFeedback(feedback);
                              console.log("HEY LISTEN", feedback);
                              this.submit(points, feedback, ()=>thread.asyncReturn(null));
                            }
                          }
                        });
                    });
                  } else {
                      this.updateStatus("Compilation Failed after", false);
                      this.executionTimer.stop();
                    // Execution failed. :(
                  }
                }, function(jvmObject) {});
            });
        });
    }

    logExecution(eventType = "Run.Program") {
        this.logEvent(eventType, "java", "run",
                JSON.stringify({
                    "runningFilename": this.runningFilename(),
                    "code": this.submission().code(),
                    "output": this.latestOutput,
                    "errors": this.latestErrors,
                    "timer": this.executionTimer.time()
                }, null, 2), this.assignment().url(), () => {});
    }

    runStudentCode(fs: FSModule, process: NodeJS.Process, consoleJQuery: JQuery<HTMLElement>) {
        this.latestOutput = [];
        this.latestErrors = [];
        consoleJQuery.html(`$> Compiling and executing: ${this.runningFilename()}.java`);
        this.updateStatus("Saving, ");
        this.executionTimer.start();
        this.updateFeedback("Compiling and executing your code!");
        this.isExecuting(true);
        let oldClassFile = this.runningFilename();
        if (this.createdFiles.length > 0) {
            oldClassFile = this.createdFiles[0];
        }
        this.logEvent("Compile", "java", "compile",
                JSON.stringify({
                    "oldClassFile": oldClassFile,
                    "runningFilename": this.runningFilename(),
                    "code": this.submission().code()
                }, null, 2), this.assignment().url(), () => {});
        fs.unlink(`/home/${oldClassFile}.class`, () => {
            fs.writeFile(`/home/${this.runningFilename()}.java`, this.submission().code(), "utf-8", () => {
                this.updateStatus("Compiling, ");
                Doppio.VM.CLI(
                  ['classes.util.Javac', `/home/${this.runningFilename()}.java`],
                {
                  doppioHomePath: '/home', launcherName: "javac"
                }, (exitCode) => {
                  if (exitCode === 0) {
                      this.updateStatus("Executing, ");
                      this.createdFiles.push(this.runningFilename());
                    Doppio.VM.CLI(
                      [this.runningFilename()],
                    {
                      doppioHomePath: '/home', launcherName: "java"
                    }, (exitCode) => {
                      if (exitCode === 0) {
                          $("#abort-command").hide();
                          this.updateStatus("Finished in", false);
                          this.executionTimer.stop();
                          this.isExecuting(false);
                          this.logExecution();
                        // Class finished executing successfully.
                      } else {
                          $("#abort-command").hide();
                          this.updateStatus("Execution Failed after", false);
                          this.executionTimer.stop();
                          this.isExecuting(false);
                          this.logExecution();
                        // Execution failed. :(
                      }
                    }, (jvmObject) => {
                          console.log(jvmObject);
                          $("#abort-command").show().on('click', ()=>{
                              jvmObject.halt(1);
                              $("#abort-command").hide();
                          });
                    });
                  } else {
                      $("#abort-command").hide();
                      this.updateStatus("Compilation Failed after", false);
                      this.executionTimer.stop();
                      this.isExecuting(false);
                      this.logExecution("Compile.Error");
                    // Execution failed. :(
                  }
                }, function(jvmObject) {
                      console.log(jvmObject);
                      $("#abort-command").show().on('click', ()=>{
                          jvmObject.halt(1);
                          $("#abort-command").hide();
                      });
                    });
            });
        });
    }

    setupFileSystem(persistentFs: any, cb: any) {
        console.log("Setting up file system");
        var root = new BrowserFS.FileSystem.MountableFileSystem();
        BrowserFS.initialize(root);
        const fs = BrowserFS.BFSRequire("fs");
        fs.mkdir('/mnt');
        root.mount('/home', persistentFs);
        root.mount('/tmp', new BrowserFS.FileSystem.InMemory());
        root.mount('/mnt/localStorage', new BrowserFS.FileSystem.LocalStorage());
        root.mount('/sys', new BrowserFS.FileSystem.XmlHttpRequest('../static/libs/doppio/listings.json', ''));
        cb();
    }

    constructPersistantFs(cb: any) {
        if (BrowserFS.FileSystem.IndexedDB.isAvailable()) {
            var idbfs_1 = new BrowserFS.FileSystem.IndexedDB(function (e, fs) {
                if (e) {
                    cb(new BrowserFS.FileSystem.InMemory());
                }
                else {
                    cb(idbfs_1);
                }
            }, 'doppio-cache');
        }
        else if (BrowserFS.FileSystem.HTML5FS.isAvailable()) {
            var html5fs_1 = new BrowserFS.FileSystem.HTML5FS(100 * 1024 * 1024);
            html5fs_1.allocate(function (e) {
                if (e) {
                    cb(new BrowserFS.FileSystem.InMemory());
                }
                else {
                    cb(html5fs_1);
                }
            });
        }
        else {
            cb(new BrowserFS.FileSystem.InMemory());
        }
    }

    setupJavaHome(persistentFs: any, cb: any) {
        console.log("Setting up Java Home");
        const progressBarText = $('.java-progress-bar span');
        const progressBar = $('.java-progress-bar');
        var fs = BrowserFS.BFSRequire('fs');
        const Buffer = BrowserFS.BFSRequire('buffer').Buffer;
        progressBarText.text("Checking browser cache...");
        fs.readFile('/vendor/java_home/jdk.json', function (err: any, data: any) {
            if (err) {
                download();
            }
            else {
                try {
                    var json = JSON.parse(data.toString());
                    var expectedURL = Doppio.VM.JVM.getCompiledJDKURL();
                    if (json.url === expectedURL) {
                        // checks out. bypass download.
                        cb();
                    } else {
                        // replace.
                        download();
                    }
                } catch (e) {
                    download();
                }
            }
        });
        function download() {
            var xhr = new XMLHttpRequest();
            var startTime = (new Date()).getTime();
            xhr.open('GET', '../static/libs/doppio/doppio_home.zip');
            xhr.responseType = "arraybuffer";
            xhr.addEventListener('progress', function (e) {
                var time = (new Date()).getTime();
                var loaded = e.loaded;
                var total = e.total;
                // KB/s
                var rate = (loaded >> 10) / ((time - startTime) / 1000);
                var remaining = (total - loaded) >> 10;
                var remainingTime = Math.floor(remaining / rate);
                var remainingMinutes = Math.floor(remainingTime / 60);
                var remainingSeconds = remainingTime % 60;
                var percent = ((loaded / total) * 100) | 0;
                progressBarText.text("Downloading doppio_home.zip at " + rate.toFixed(2) + " KB/s [" + (loaded >> 10) + " KB / " + (total >> 10) + " KB] (" + remainingMinutes + "m" + remainingSeconds + "s remaining)");
                progressBar.attr('aria-valuenow', percent);
                progressBar.css('width', percent + "%");
            });
            xhr.addEventListener('load', function (e) {
                extract(xhr.response);
            });
            xhr.addEventListener('error', function (e) {
                console.error(e);
                progressBar.removeClass('active').addClass('progress-bar-danger');
                // @ts-ignore
                progressBarText.text("Error downloading doppio_home.zip: " + e.error);
            });
            xhr.addEventListener('abort', function (e) {
                progressBar.removeClass('active').addClass('progress-bar-danger');
                progressBarText.text("Error downloading doppio_home.zip: Transfer aborted.");
            });
            xhr.send();
        }
        function extract(data: any) {
            var mfs = new BrowserFS.FileSystem.MountableFileSystem();
            mfs.mount('/persist', persistentFs);
            mfs.mount('/doppio_home', new BrowserFS.FileSystem.ZipFS(new Buffer(data)));
            BrowserFS.initialize(mfs);
            recursiveCopy('/doppio_home', '/persist', function (src: any, dest: any, size: any) {
                progressBarText.text("Extracting " + dest.slice(dest.indexOf('/', 1) + 1) + "...");
            }, function (err: any) {
                if (err) {
                    console.error(err);
                    progressBar.removeClass('active').addClass('progress-bar-danger');
                    progressBarText.text("Error extracting doppio_home.zip: " + err);
                }
                //else {
                    cb();
                //}
            });
        }
    }

    loadJava(assignmentId: number) {
        if (assignmentId != null) {
            this.loadDoppio();
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
        let process = BrowserFS.BFSRequire('process');
        process.removeAllListeners('data');
        this.subscriptions.currentAssignmentId.dispose();
        this.subscriptions.code.dispose();
        this.subscriptions.submission.dispose();
        this.executionTimer.reset();
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
            this.logEvent("X-File.Reset", "java", "code_reset",
                JSON.stringify({
                    "code": this.assignment().startingCode()
                }), this.assignment().url(), () => {})
        }
    }

    reloadConsole() {
        if (confirm("Are you sure you want to reload your console? This will not affect your code at all. It will take a few seconds to reload the console. You may need to reload the page aftewards!")) {
            window.stop();
            this.persistentFs.store.db.close();
            const requestDeleteDoppio = indexedDB.deleteDatabase("doppio-cache");
            requestDeleteDoppio.onsuccess =  () => {
                const requestDeleteBrowserFS = indexedDB.deleteDatabase("__browserfs_test__");
                requestDeleteBrowserFS.onsuccess =  () => {
                    this.persistentFs = null;
                    $('.java-progress-bar-container').show();
                    this.loadDoppio();
                    this.logEvent("X-System.Reset", "java", "console_reload",
                        JSON.stringify({}), this.assignment().url(), () => {})
                };
                requestDeleteBrowserFS.onerror = (e: any) => {
                    alert("Couldn't delete BrowserFS. Report this error please!" + e);
                    console.error("Error BFS Delete", e);
                    this.logEvent("X-System.Reset.Error", "java", "console_reload_error",
                        JSON.stringify({"reason": "BFS Error"}), this.assignment().url(), () => {})
                };
                requestDeleteBrowserFS.onblocked = (e: any) => {
                    alert("Reload BFS was blocked. Report this error please!" + e);
                    console.error("Blocked BFS Delete", e);
                    this.logEvent("X-System.Reset.Error", "java", "console_reload_error",
                        JSON.stringify({"reason": "BFS Blocked"}), this.assignment().url(), () => {})
                };
            };
            requestDeleteDoppio.onerror = (e: any) => {
                alert("Couldn't delete Doppio. Report this error please!"+e);
                console.error("Error Doppio Delete", e);
                this.logEvent("X-System.Reset.Error", "java", "console_reload_error",
                        JSON.stringify({"reason": "Doppio Error"}), this.assignment().url(), () => {})
            };
            requestDeleteDoppio.onblocked = (e: any) => {
                alert("Reloading Doppio was blocked. Report this error please!"+e);
                console.error("Blocked Doppio Delete", e);
                this.logEvent("X-System.Reset.Error", "java", "console_reload_error",
                        JSON.stringify({"reason": "Doppio Blocked"}), this.assignment().url(), () => {})
            };
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
        <label class="btn btn-outline-secondary" for="java-editor-mode-radio-submission"
            data-bind="css: { active: editorMode()=='SUBMISSION'}">
            <input data-bind="checked: editorMode"
               id="java-editor-mode-radio-submission" name="java-editor-mode-radio"
               class="btn-check" type="radio" value="SUBMISSION" autocomplete="off">
            Student Code Editor
        </label>
        <label class="btn btn-outline-secondary mr-4" for="java-editor-mode-radio-form"
            data-bind="css: { active: editorMode()=='FORM'}">
            <input data-bind="checked: editorMode"
                       id="java-editor-mode-radio-form" name="java-editor-mode-radio"
                       class="btn-check" type="radio" value="FORM" autocomplete="off">
            Instructor Editor
        </label>
        <label class="btn btn-outline-secondary mr-4" for="java-editor-mode-radio-raw"
            data-bind="css: { active: editorMode()=='RAW'}">
            <input data-bind="checked: editorMode"
                   id="java-editor-mode-radio-raw" name="java-editor-mode-radio"
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
        <!--<h6>Instructor Feedback (On Run) Code</h6>
        <div data-bind="codemirror: {value: assignment().onRun, lineNumbers: true, matchBrackets: true, mode: 'text/x-java'}" style="width: 100%; height: 300px"></div><br>
        <button data-bind="click: ()=>resetAssignmentIfNeeded()">Reset On Run</button>-->
        <!-- Starting Code -->
        <h6>Starting Student Code</h6>
        <div data-bind="codemirror: {value: assignment().startingCode, lineNumbers: true, matchBrackets: true, mode: 'text/x-java'}" style="width: 100%; height: 300px"></div><br>
        <!-- Instructions -->
        <h6>Instructions (Body)</h6>
        <textarea data-bind="markdowneditor: {value: assignment().instructions}" style="width: 100%; height: 300px"></textarea><br>
        <!-- Other settings -->
        <div class="form-group">
            <label for="textbook-points-editor">
                Points:
                <input type="number" id="textbook-points-editor" name="textbook-points-editor"
                    class="form-control" data-bind="value: assignment().points">
            </label>
        </div>
        <div class="form-group">
            <label for="textbook-name-editor">
                Name:
                <input type="text" id="textbook-name-editor" name="textbook-name-editor"
                    class="form-control" data-bind="value: assignment().name">
            </label>
        </div>
        <div class="form-group">
            <label for="textbook-url-editor">
                URL:
                <input type="text" id="textbook-url-editor" name="textbook-url-editor"
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


export const JAVA_HTML = `
<div>
    ${EDITOR_HTML}
    <!-- ko if: assignment -->
    <div data-bind="markdowned: {value: assignment().instructions()}"></div>
    <!-- /ko -->
    <!-- Body -->
    <div class="row java-progress-bar-container m-2">
        <div class="col-md-12">
          <div class="alert alert-danger" role="alert" style="display: none;"></div>
          <div class="progress">
            <div class="java-progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%">
              <span>Connecting to server for download...</span>
            </div>
          </div>
        </div>
      </div>
      
     <div id='ide'>
        <div id='source' style='height: 70%;'></div>
      <!--<label for='filename' class='control-label'>Save As:</label>
      <input type='text' id='filename' class='input-xlarge'/>
      <button id='save_btn' class='btn btn-mini btn-primary'>Save &amp; Close</button>
      <button id='close_btn' style="display: none" class='btn btn-mini btn-primary'>Close Without Saving</button>-->
      
      <div class="btn-group m-2" role="group" aria-label="Execution Control Buttons">
          <!--<button class='btn btn-success java-eval-button' type="button">Run and Grade</button>
        
          <div class="btn-group" role="group">
            <button id="java-execution-control" type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              
            </button>
            <div class="dropdown-menu" aria-labelledby="java-execution-control">
              <button class='btn btn-mini btn-success java-run-button'>Run without grading</button>
            </div>
          </div>-->
          <button class='btn btn-mini btn-success java-run-button' data-bind="disable: isExecuting">Run</button>
      </div>
      
      <div class="spinner-loader java-working-spinner" role="status" style="display: inline-block;"><span class="sr-only">Loading...</span></div>
      <span class="java-status"></span>
      <span class="java-clock"></span>
      <span class="time-clock float-right" data-bind="text: currentTime"></span>
      <button class="btn btn-mini btn-xs btn-outline-secondary code-reset float-right mr-3" data-bind="click: resetStudent">Reset Code</button>
      <!-- ko if: isDirty() -->
        <small class="alert alert-info p-1 border rounded float-right">Saving changes</small>
      <!-- /ko -->
      </div>
      <!-- ko if: submission -->
        <div data-bind="codemirror: {value: submission().code, lineNumbers: true, 
        matchBrackets: true, mode: 'text/x-java'}" style="width: 100%; height: 300px; border: 1px solid black;"></div><br>
      <!-- /ko -->
      <div class="row mb-2">
        <div class="col-md-12">
            <button class="btn btn-mini btn-xs btn-outline-secondary system-reload float-right mr-3" data-bind="click: reloadConsole">Reload Console</button>
            <button class="btn btn-mini btn-xs btn-outline-secondary float-right mr-3" style="display: none;" id="abort-command">Stop Execution</button>
            <h6>Console (stdout)</h6>
            
            <!-- ko if: filename().length === 0 -->
                <span class="alert alert-warning">No public class found (there must be at least one)</span>
            <!-- /ko -->
            <!-- ko if: filename().length === 1 -->
                <code class="found-filename" data-bind="text: filename()[0]+'.java'"></code>
            <!-- /ko -->
            <!-- ko if: filename().length > 1 -->
                <span class="alert alert-warning">Multiple public classes found (there can be only one)</span>
            <!-- /ko -->
            <div class='java-console' style="min-height: 300px"></div>
        </div>
        <!--<div class="col-md-5">
            <h6>Instructor Feedback</h6>
            <div class="java-feedback" style="min-height: 300px; padding: 4px"></div>
        </div>-->
      </div>
</div>
`

ko.components.register("java", {
    viewModel: Java,
    template: JAVA_HTML
});
