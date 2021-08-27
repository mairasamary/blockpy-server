import * as ko from 'knockout';
import {Server} from "./server";
import {User} from "../models/user";
import {Assignment} from "../models/assignment";
import {Submission} from "../models/submission";
import {AssignmentInterface, AssignmentInterfaceJson, EditorMode} from "./assignment_interface";

// TODO: Prevent popout button in exams, allow easy to close button there too?
// TODO: Fix IP Change logEvent?
// TODO: Mark as success on load

export const LOG_TIME_RATE = 30000;

export class Reader extends AssignmentInterface {
    logTimer: NodeJS.Timeout
    logCount: number
    ytPlayer: any
    youtube: ko.Observable<string>;
    header: ko.Observable<string>;
    slides: ko.Observable<string>;
    summary: ko.Observable<string>;

    errorMessage: ko.Observable<string>;
    editorMode: ko.Observable<EditorMode>;

    constructor(params: AssignmentInterfaceJson) {
        super(params);
        this.logCount = 0;
        this.youtube = ko.observable<string>("");
        this.header = ko.observable<string>("");
        this.slides = ko.observable<string>("");
        this.summary = ko.observable<string>("");

        this.editorMode = ko.observable(EditorMode.SUBMISSION);
        this.errorMessage = ko.observable("");

        this.currentAssignmentId.subscribe((newId) => {
            this.loadReading(newId);
        }, this);
        this.loadReading(this.currentAssignmentId());

    }

    loadReading(assignmentId: number) {
        if (assignmentId != null) {
            let BlockPyServer = window['$MAIN_BLOCKPY_EDITOR'].components.server;
            let data = BlockPyServer.createServerData();
            data["assignment_id"] = assignmentId;
            BlockPyServer._postBlocking("loadAssignment", data, 4,
                (response: any) => {
                    if (response.success) {
                        let assignment = this.server.assignmentStore.newInstance(response.assignment);
                        let submission = this.server.submissionStore.newInstance(response.submission);
                        this.assignment(assignment);
                        this.submission(submission);
                        this.logCount = 1;
                        this.logTimer = setTimeout(this.logReading.bind(this), 1000);
                        this.assignment().instructions.subscribe(this.registerWatcher.bind(this));
                        this.parseAdditionalSettings();
                        this.markRead();
                        this.registerWatcher();
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
        this.youtube(settings.youtube || "");
        this.header(settings.header || "");
        this.slides(settings.slides || "");
        this.summary(settings.summary || "");
    }

    logWatching(event: any) {
        if (this.assignment() && this.youtube()) {
            this.logEvent("Resource.View", "reading", "watch",
                JSON.stringify({
                    "event": event.data,
                    "time": this.ytPlayer.getCurrentTime()
                }), this.assignment().url(), () => {})
        }
    }

    dispose() {
        if (this.ytPlayer) {
            //this.ytPlayer.stopVideo();
            this.ytPlayer.destroy();
            this.ytPlayer = null;
        }
    }

    registerWatcher() {
        //let youtubes = $("iframe[src^='https://www.youtube.com']");
        // XTODO: Map it over any youtube videos
        //let url = youtubes.attr("src");
        //let id = url.replace(/.*\/(\w+)\/?.*$/, '$1');
        //youtubes.attr("id", id);

        // @ts-ignore
        this.ytPlayer = new YT.Player('reader-youtube-video', {
            events: {
                'onStateChange': this.logWatching.bind(this)
            }
        })
    }

    logReading() {
        this.logCount += 1;
        let delay = this.logCount * LOG_TIME_RATE;
        let position = $(window).scrollTop();
        let height = ($(document).height() - $(window).height());
        let progress = 100* position / height;
        //console.log(this.logCount, delay, this.assignment());
        if (this.assignment()) {
            this.logEvent("Resource.View", "reading", "read",
                JSON.stringify({
                    "count": this.logCount,
                    delay, position, height, progress
                }), this.assignment().url(), () => {
                    this.logTimer = setTimeout(this.logReading.bind(this), delay);
                })
        } else {
            console.log("Skipping log event");
        }
    }

    saveAssignment() {
        this.saveFile("!instructions.md", this.assignment().instructions(), true);
        this.saveAssignmentSettings({
            settings: this.assignment().settings(),
            points: this.assignment().points(),
            url: this.assignment().url(),
            name: this.assignment().name()
        });
    }

    markRead() {
        let BlockPyServer = window['$MAIN_BLOCKPY_EDITOR'].components.server;
        let now = new Date();
        let data = {
            assignment_id: this.assignment().id,
            assignment_group_id: this.assignmentGroupId,
            course_id: this.courseId,
            submission_id: this.submission().id,
            user_id: this.user.id,
            status: 1,
            correct: true,
            timestamp: now.getTime(),
            timezone: now.getTimezoneOffset(),
            passcode: window['$MAIN_BLOCKPY_EDITOR'].model.display.passcode(),
        };
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
                    this.submission().correct(response.correct);
                    if (response.correct) {
                        this.markCorrect(this.assignment().id);
                    }
               },
               (e: any, textStatus: string, errorThrown: any) => {
                    console.error("Failed to load (HTTP LEVEL)", e, textStatus, errorThrown);
                    this.errorMessage("HTTP ERROR (try reloading the page; if still an error, report to instructor!): "+ textStatus+"\n"+errorThrown);
                });
    }
}

// TODO: Pop out button to put into another frame
// TODO: Log all youtube and scrolling

export const EDITOR_HTML = `
<!-- Errors -->
<div class="bg-danger text-white p-3 border rounded" data-bind="text: errorMessage, visible: errorMessage().length"></div>

<!-- Instructor Editor Mode Selector -->
<div data-bind="if: isInstructor()">
    <!-- Instructor Editor Mode Selector -->
    <div class="form-check">
        <label class="form-check-label">
            <input data-bind="checked: editorMode"
               id="editor-mode-radio" name="editor-mode-radio"
               class="form-check-input" type="radio" value="RAW">
            Raw Editor
        </label>
    </div>
    <div class="form-check">
        <label class="form-check-label">
            <input data-bind="checked: editorMode"
                   id="editor-mode-radio" name="editor-mode-radio"
                   class="form-check-input" type="radio" value="FORM">
            Form Editor
        </label>
    </div>
    <div class="form-check">
        <label class="form-check-label">
            <input data-bind="checked: editorMode"
               id="editor-mode-radio" name="editor-mode-radio"
               class="form-check-input" type="radio" value="SUBMISSION">
            Actual Reader
        </label>
    </div>
    
    <!-- Raw Instructor Editor -->
    <div data-bind="if: editorMode() === 'RAW'">
        <button data-bind="click: saveAssignment">Save Assignment</button><br>
        <h6>Instructions</h6>
        <textarea data-bind="textInput: assignment().instructions" style="width: 100%; height: 300px"></textarea><br>
        <h6>Settings</h6>
        <textarea data-bind="textInput: assignment().settings" style="width: 100%; height: 300px"></textarea><br>
    </div>

    <!-- Form Instructor Editor -->
    <div data-bind="if: editorMode() === 'FORM'">
        <button data-bind="click: saveAssignment">Save Assignment</button><br>
        <!-- Actual Contents -->
        <h6>Instructions (Body)</h6>
        <textarea data-bind="markdowneditor: {value: assignment().instructions}" style="width: 100%; height: 300px"></textarea><br>
        <!-- Other settings -->
        <div class="form-group">
            <label for="reader-points-editor">
                Points:
                <input type="number" id="reader-points-editor" name="reader-points-editor"
                    class="form-control" data-bind="value: assignment().points">
            </label>
        </div>
        <div class="form-group">
            <label for="reader-name-editor">
                Name:
                <input type="text" id="reader-name-editor" name="reader-name-editor"
                    class="form-control" data-bind="value: assignment().name">
            </label>
        </div>
        <div class="form-group">
            <label for="reader-url-editor">
                URL:
                <input type="text" id="reader-url-editor" name="reader-url-editor"
                    class="form-control" data-bind="value: assignment().url">
            </label>
        </div>
        <h6>Additional Settings</h6>
        <div data-bind="jsoneditor: {value: assignment().settings}" style="width: 100%; height: 300px"></div><br>
    </div>
</div>
`;


export const READER_HTML = `
<div data-bind="if: assignment">
    ${EDITOR_HTML}
    <!-- Popout button -->
    <a href="" class="btn btn-sm btn-outline-secondary float-right m-3" target="_blank"
        data-bind="attr: {href: assignment().editUrl()+'&embed=true'}">
        <span class="fas fa-external-link-alt" aria-hidden="true"></span>
        Popout
    </a>
    <!-- Download button -->
    <a href="" class="btn btn-sm btn-outline-secondary float-right m-3" target="_blank"
        data-bind="attr: {href: slides()}, visible: slides().length">
        <span class="fas fa-download" aria-hidden="true"></span>
        Download
    </a>
    <!-- Body -->
    <div  style="background: #FBFAF7" class="pt-4">
        <h3 data-bind="text: header(), hidden: !header().length"></h3>
        <div data-bind="text: summary(), hidden: !summary().length"></div>
        <iframe style="width: 640px; height: 480px;"
            width="300" height="150" allowfullscreen="allowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            id="reader-youtube-video"
            data-bind="attr: {title: assignment().name(),
                              src: 'https://www.youtube.com/embed/'+youtube()+'?feature=oembed&rel=0&enablejsapi=1'},
                       hidden: !youtube().length">
        </iframe>
        <div data-bind="markdowned: assignment().instructions()"
            class="p-4"></div>
        <hr>
    </div>
</div>
`

ko.components.register("reader", {
    viewModel: Reader,
    template: READER_HTML
});
