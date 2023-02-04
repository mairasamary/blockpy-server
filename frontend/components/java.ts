/***
 * Java is an editor (ace) plus Doppio. It's really not fancy.
 */

import * as ko from 'knockout';
import {AssignmentInterface, AssignmentInterfaceJson, EditorMode} from "./assignment_interface";
import * as BrowserFS from 'browserfs';
import * as Doppio from 'doppiojvm';
import {recursiveCopy} from "../utilities/doppio_utils";

interface JavaInterfaceJson extends AssignmentInterfaceJson {
}

export class Java extends AssignmentInterface {
    errorMessage: ko.Observable<string>;
    editorMode: ko.Observable<EditorMode>;

    persistentFs: any;

    subscriptions: {
        currentAssignmentId: ko.Subscription
    }

    constructor(params: JavaInterfaceJson) {
        super(params);
        this.editorMode = ko.observable(EditorMode.SUBMISSION);
        this.errorMessage = ko.observable("");
        this.subscriptions = {currentAssignmentId: null};
        this.persistentFs = null;

        this.subscriptions.currentAssignmentId = this.currentAssignmentId.subscribe((newId) => {
            this.loadJava(newId);
        }, this);
        this.loadJava(this.currentAssignmentId());
    }

    loadDoppio() {
        if (this.persistentFs === null) {
            this.constructPersistantFs((_fs: any) => {
            this.persistentFs = _fs;
            BrowserFS.initialize(_fs);
            this.setupJavaHome(this.persistentFs, () => {
                this.setupFileSystem(this.persistentFs,  () => {
                    $('#progress-bar-container').fadeOut('fast', () => {
                        this.startDemo();
                    });
                });
            });
        });
        }
    }

    startDemo() {
        let fs = BrowserFS.BFSRequire('fs');
        let process = BrowserFS.BFSRequire('process');
        var consoleJQuery = $('#console');
        process.chdir('/home');
        var consoleElement = consoleJQuery.get()[0];
        var shell = {
            stdout: (text: string)=> {
                console.log(text);
                consoleJQuery.append(`<div style="color: white;">${text}</div>`);
            },
            stderr: (text: string) => {
                console.error(text);
                consoleJQuery.append(`<div style="color: red;">${text}</div>`);
            }
        };
        console.log(fs, process, shell);
        process.stdout.on('data', function (data) { return shell.stdout(data.toString()); });
        process.stderr.on('data', function (data) { return shell.stderr(data.toString()); });
        /*fs.writeFile("/home/Answer.java", `
public class Answer {
    public static void main(String[] args) {
        System.out.println("WHAT");
    }
}`, "utf-8");*/
        shell.stdout("Hello world!");

        $("#jvm_status").text("Ready");

        $("#run_btn").on('click', () => {
            consoleJQuery.html("");
            $("#jvm_status").text("Saving");
            fs.writeFile("/home/Answer.java", this.submission().code(), "utf-8", () => {
                $("#jvm_status").text("Compiling");
                Doppio.VM.CLI(
                  ['classes.util.Javac', '/home/Answer.java'],
                {
                  doppioHomePath: '/home', launcherName: "javac"
                }, function(exitCode) {
                  if (exitCode === 0) {
                      $("#jvm_status").text("Executing");
                    Doppio.VM.CLI(
                      ['Answer'],
                    {
                      doppioHomePath: '/home', launcherName: "java"
                    }, function(exitCode) {
                      if (exitCode === 0) {
                          $("#jvm_status").text("Finished");
                        // Class finished executing successfully.
                      } else {
                          $("#jvm_status").text("Execution Failed");
                        // Execution failed. :(
                      }
                    }, function(jvmObject) {});
                  } else {
                      $("#jvm_status").text("Compilation Failed");
                    // Execution failed. :(
                  }
                }, function(jvmObject) {});
            });
        });
    }

    setupFileSystem(persistentFs: any, cb: any) {
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
        const progressBarText = $('.progress-bar span');
        const progressBar = $('.progress-bar');
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
            console.log("MOUTNING", persistentFs);
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
                    console.log("FINISHED");
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

    parseAdditionalSettings() {
        let settingsRaw = this.assignment().settings();
        let settings = JSON.parse(settingsRaw || "{}");
    }

    dispose() {
        this.subscriptions.currentAssignmentId.dispose();
    }

    saveAssignment() {
        this.saveFile("!instructions.md", this.assignment().instructions(), true, ()=>{});
        this.saveAssignmentSettings({
            settings: this.assignment().settings(),
            points: this.assignment().points(),
            url: this.assignment().url(),
            name: this.assignment().name()
        });
    }

    saveSubmissionRaw() {
        this.saveFile("answer.py", this.submission().code(), true, ()=>{});
    }
}

export const EDITOR_HTML = `
<!-- Errors -->
<div class="alert alert-warning p-1 border rounded float-right" data-bind="text: errorMessage, visible: errorMessage().length"></div>

<!-- Instructor Editor Mode Selector -->
<div data-bind="if: isInstructor()">
    <!-- Instructor Editor Mode Selector -->
    <div class="form-check">
        <label class="form-check-label">
            <input data-bind="checked: editorMode"
               id="textbook-editor-mode-radio" name="textbook-editor-mode-radio"
               class="form-check-input" type="radio" value="RAW">
            Raw Editor
        </label>
    </div>
    <div class="form-check">
        <label class="form-check-label">
            <input data-bind="checked: editorMode"
                   id="textbook-editor-mode-radio" name="textbook-editor-mode-radio"
                   class="form-check-input" type="radio" value="FORM">
            Form Editor
        </label>
    </div>
    <div class="form-check">
        <label class="form-check-label">
            <input data-bind="checked: editorMode"
               id="textbook-editor-mode-radio" name="textbook-editor-mode-radio"
               class="form-check-input" type="radio" value="SUBMISSION">
            Actual Textbook
        </label>
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
        <button data-bind="click: saveAssignment">Save Assignment</button><br>
        <!-- Actual Contents -->
        <h6>Instructions (Body)</h6>
        <div data-bind="jsoneditor: {value: assignment().instructions}" style="width: 100%; height: 500px; resize: vertical; overflow: auto"></div><br>
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
    Testing
    ${EDITOR_HTML}
    <!-- Body -->
    <div class="row" id="progress-bar-container">
        <div class="col-md-12">
          <div class="alert alert-danger" role="alert" style="display: none;"></div>
          <div class="progress">
            <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%">
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
      <button id='run_btn' class='btn btn-mini btn-success'>Run</button>
      <span id="jvm_status"></span>
      </div>
      <div id='console'></div>
      <!-- ko if: submission -->
        <div data-bind="codemirror: {value: submission().code}" style="width: 100%; height: 300px"></div><br>
        <!-- /ko -->
</div>
`

ko.components.register("java", {
    viewModel: Java,
    template: JAVA_HTML
});
