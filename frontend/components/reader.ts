/***
 * ### Supporting BlockPy Inside of Readers ###
 * Add a new "part ID" to configuration settings in BlockPy, set when the instance is loaded.
 *     That narrows what is rendered in the area and what is saved in the whole thing
 * Load the plugin in Reader
 *     https://github.com/markdown-it/markdown-it-container
 *     Add a new set of tags for BlockPy regions (including the required Part ID)
 * On backend, need to handle the Part ID for saving/loading files, to only update part of the region of the file.
 *     Also needs to make "starting_code" work more intelligently - it should make it based on the file type
 */

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
export const VIDEO_EVENTS = "pause playing seeked ended loadeddata error ratechange waiting";

interface ReaderInterfaceJson extends AssignmentInterfaceJson {
    asPreamble: boolean
}

export class Reader extends AssignmentInterface {
    logTimer: NodeJS.Timeout;
    logCount: number;
    videoLogger: any;
    video: ko.Observable<string>;
    videoOptions: ko.Observable<Record<string, string>>;
    ytPlayer: any;
    youtube: ko.Observable<string>;
    youtubeOptions: ko.Observable<Record<string, string>>;
    header: ko.Observable<string>;
    slides: ko.Observable<string>;
    summary: ko.Observable<string>;

    asPreamble: ko.Observable<boolean>;
    allowPopout: ko.Observable<boolean>;

    errorMessage: ko.Observable<string>;
    editorMode: ko.Observable<EditorMode>;

    LS_CURRENT_VOICE_CHOICES_KEY = "blockpy-reader-voice-choice";

    subscriptions: {
        currentAssignmentId: ko.Subscription,
        windowPositioning: (event: Event) => void,
        videoUrl: ko.Subscription
    }

    constructor(params: ReaderInterfaceJson) {
        super(params);
        this.subscriptions = {currentAssignmentId: null, windowPositioning: null, videoUrl: null};
        this.logCount = 0;
        this.youtubeOptions = ko.observable<Record<string, string>>({});
        this.youtube = ko.observable<string>("");
        this.videoOptions = ko.observable<Record<string, string>>({});
        this.video = ko.observable<string>("");
        this.header = ko.observable<string>("");
        this.slides = ko.observable<string>("");
        this.summary = ko.observable<string>("");
        this.asPreamble = ko.observable<boolean>(params.asPreamble || false);
        this.allowPopout = ko.observable<boolean>(true);

        this.editorMode = ko.observable(EditorMode.SUBMISSION);
        this.errorMessage = ko.observable("");

        this.subscriptions.currentAssignmentId = this.currentAssignmentId.subscribe((newId) => {
            this.loadReading(newId);
        }, this);
        this.loadReading(this.currentAssignmentId());

        this.subscriptions.windowPositioning = this.getWindowPositioning.bind(this)
        window.addEventListener('message', this.subscriptions.windowPositioning);
        this.subscriptions.videoUrl = this.video.subscribe((newUrl) => {
            $(".reader-video-display").attr("src", newUrl + "#t=1");
            $(".reader-video-display track").attr("src", newUrl.slice(0, -3) + "vtt");
            /*<source data-bind="attr: { src: video() + '#t=1' }" type="video/mp4" >
            <track data-bind="attr: { src: video().slice(0, -3) + 'vtt'}"
                default kind="captions" srclang="en" label="English">*/
        });
    }

    loadReading(assignmentId: number) {
        if (assignmentId != null) {
            let BlockPyServer = window['$MAIN_BLOCKPY_EDITOR'].components.server;
            let data = BlockPyServer.createServerData();
            data["assignment_id"] = assignmentId;
            this.assignment(null);
            BlockPyServer._postBlocking("loadAssignment", data, 4,
                (response: any) => {
                    if (response.success) {
                        let assignment = this.server.assignmentStore.newInstance(response.assignment);
                        let submission = response.submission ? this.server.submissionStore.newInstance(response.submission) : null;
                        this.assignment(assignment);
                        this.submission(submission);
                        this.logCount = 1;
                        this.logTimer = setTimeout(this.logReadingStart.bind(this), 1000);
                        this.assignment().instructions.subscribe(this.registerWatcher.bind(this));
                        this.parseAdditionalSettings();
                        if (response.submission) {
                            this.markRead();
                        }
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

    setVoice(voice: string, voiceUrl: string) {
        this.youtube(voiceUrl);
        this.rememberVoiceChoice(voice);
    }

    setVoiceVideo(voice: string, voiceUrl: string) {
        this.video(voiceUrl);
        this.rememberVoiceChoice(voice);
    }

    getBestVoice(options: Record<string, string>) {
        let previouslyChosenVoices = localStorage.getItem(this.LS_CURRENT_VOICE_CHOICES_KEY);
        const defaultVoice = Object.values(options)[0] || "";
        if (previouslyChosenVoices == null) {
            return defaultVoice;
        }
        try {
            previouslyChosenVoices = JSON.parse(previouslyChosenVoices);
        } catch {
            return defaultVoice;
        }
        for (const voice of previouslyChosenVoices) {
            if (voice in options) {
                return options[voice];
            }
        }
        return defaultVoice;
    }

    rememberVoiceChoice(voice: string) {
        let previouslyChosenVoicesRaw = localStorage.getItem(this.LS_CURRENT_VOICE_CHOICES_KEY);
        if (previouslyChosenVoicesRaw == null) {
            localStorage.setItem(this.LS_CURRENT_VOICE_CHOICES_KEY, JSON.stringify([voice]));
            return;
        }
        let previouslyChosenVoices: string[];
        try {
            previouslyChosenVoices = JSON.parse(previouslyChosenVoicesRaw);
        } catch {
            localStorage.setItem(this.LS_CURRENT_VOICE_CHOICES_KEY, JSON.stringify([voice]));
            return;
        }
        // Remove if it exists
        previouslyChosenVoices = previouslyChosenVoices.filter(v => v !== voice);
        // Add it to the front
        previouslyChosenVoices.unshift(voice);
        // Store it for next time
        localStorage.setItem(this.LS_CURRENT_VOICE_CHOICES_KEY, JSON.stringify(previouslyChosenVoices));
    }

    parseAdditionalSettings() {
        let settingsRaw = this.assignment().settings();
        let settings = JSON.parse(settingsRaw || "{}");
        if (settings.youtube instanceof Object) {
            this.youtubeOptions(settings.youtube);
            this.youtube(this.getBestVoice(settings.youtube));
        } else {
            this.youtubeOptions({});
            this.youtube(settings.youtube || "");
        }
        if (settings.video instanceof Object) {
            this.videoOptions(settings.video);
            this.video(this.getBestVoice(settings.video));
        } else {
            this.videoOptions({});
            this.video(settings.video || "");
        }
        console.log(settings);
        if ('popout' in settings) {
            this.allowPopout(settings.popout);
        }
        this.header(settings.header || "");
        let slides = settings.slides || "";
        if (slides && !(/^https?:\/\//.test(slides))) {
            slides = window["$URL_ROOT"] + `blockpy/download_file?placement=assignment&directory=${this.assignment().id}&filename=${slides}`;
        }
        this.slides(slides);
        this.summary(settings.summary || "");
    }

    logWatching(event: any) {
        if (this.assignment()) {
            if (this.video().length) {
                this.logEvent("Resource.View", "reading", "watch",
                    JSON.stringify({
                        "event": event.type,
                        "time": event.currentTarget.currentTime
                    }), this.assignment().url(), () => {})
            } else if (this.youtube()) {
                this.logEvent("Resource.View", "reading", "watch",
                    JSON.stringify({
                        "event": event.data,
                        "time": this.ytPlayer.getCurrentTime()
                    }), this.assignment().url(), () => {})
            }
        }
    }

    dispose() {
        this.subscriptions.currentAssignmentId.dispose();
        window.removeEventListener('message', this.subscriptions.windowPositioning);
        if (this.ytPlayer) {
            //this.ytPlayer.stopVideo();
            this.ytPlayer.destroy();
            this.ytPlayer = null;
        }
        if (this.videoLogger) {
            this.videoLogger.off(VIDEO_EVENTS);
        }
    }

    registerWatcher() {
        if (this.youtube() && !this.video()) {
            this.registerYoutubeWatcher();
        } else {
            this.registerVideoWatcher();
        }
    }

    registerVideoWatcher() {
        this.videoLogger = $(".reader-video-display");
        this.videoLogger.on(VIDEO_EVENTS, this.logWatching.bind(this));
    }

    registerYoutubeWatcher() {
        //let youtubes = $("iframe[src^='https://www.youtube.com']");
        // XTODO: Map it over any youtube videos
        //let url = youtubes.attr("src");
        //let id = url.replace(/.*\/(\w+)\/?.*$/, '$1');
        //youtubes.attr("id", id);

        try {
            // @ts-ignore
            this.ytPlayer = new YT.Player('reader-youtube-video', {
                // TODO: log 'onPlaybackRateChange'
                playerVars: {
                    origin: window["$URL_ROOT"],
                    enablejsapi: 1,
                },
                events: {
                    'onStateChange': this.logWatching.bind(this)
                }
            })
        } catch (error) {
            console.log("YT Player probably not available.");
            console.error(error);
        }
    }

    getWindowPositioning(event: any) {
        let data = (typeof event.data === "string") ? JSON.parse(event.data) : event.data;
        if (data.subject === "lti.fetchWindowSize" || data.subject === "lti.fetchWindowSize.response") {
            this.logReading(data);
        }
    }

    logReadingStart(assignmentId: number) {
        window.top.postMessage({subject: "lti.fetchWindowSize"}, "*");
    }

    logReading(positionData: any) {
        this.logCount += 1;
        let delay = this.logCount * LOG_TIME_RATE;
        let position, height;
        if (positionData != null && 'offset' in positionData) {
            position = positionData.scrollY;
            height = $(document).height() + positionData.offset.top;
        } else {
            position = $(document).scrollTop();
            height = $(document).height();
        }
        let progress = 100* position / height;
        if (this.assignment() && this.submission()) {
            this.logEvent("Resource.View", "reading", "read",
                JSON.stringify({
                    "count": this.logCount,
                    delay, position, height, progress
                }), this.assignment().url(), () => {
                    this.logTimer = setTimeout(this.logReadingStart.bind(this), delay);
                })
        } else {
            console.log("Skipping log event");
        }
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
                        //console.log(response);
                    }
                    if (!response.success) {
                        console.error(response);
                        this.errorMessage(response.message.message);
                    }
                    this.submission().submissionStatus(response.submission_status);
                    this.submission().correct(response.correct);
                    if (response.correct && this.markCorrect) {
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
<div class="alert alert-warning p-1 border rounded float-right" data-bind="text: errorMessage, visible: errorMessage().length"></div>

<!-- Instructor Editor Mode Selector -->
<div data-bind="if: isInstructor() && !asPreamble()">
    <!-- Instructor Editor Mode Selector -->
    <div class="btn-group-toggle mt-2 mb-2">
        <label class="btn btn-outline-secondary mr-4" for="reader-editor-mode-radio-raw"
            data-bind="css: { active: editorMode()=='RAW'}">
            <input data-bind="checked: editorMode"
                   id="reader-editor-mode-radio-raw" name="reader-editor-mode-radio"
                   class="btn-check" type="radio" value="RAW" autocomplete="off">
            Raw Editor
        </label>
        <label class="btn btn-outline-secondary mr-4" for="reader-editor-mode-radio-form"
            data-bind="css: { active: editorMode()=='FORM'}">
            <input data-bind="checked: editorMode"
                       id="reader-editor-mode-radio-form" name="reader-editor-mode-radio"
                       class="btn-check" type="radio" value="FORM" autocomplete="off">
            Form Editor
        </label>
        <label class="btn btn-outline-secondary" for="reader-editor-mode-radio-submission"
            data-bind="css: { active: editorMode()=='SUBMISSION'}">
            <input data-bind="checked: editorMode"
               id="reader-editor-mode-radio-submission" name="reader-editor-mode-radio"
               class="btn-check" type="radio" value="SUBMISSION" autocomplete="off">
            Actual Reader
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
    </div>

    <!-- Form Instructor Editor -->
    <div data-bind="if: editorMode() === 'FORM'" class="reader-editor">
        <button data-bind="click: saveAssignment">Save Assignment</button><br>
        <!-- Actual Contents -->
        <h6>Instructions (Body)</h6>
        <textarea data-bind="markdowneditor: {value: assignment().instructions}" style="width: 100%; height: 500px"></textarea><br>
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
        <h6>Assignment Files</h6>
        <div data-bind="filepond: {server: server, submission: submission, assignment: assignment}"></div><br>
    </div>
</div>
`;


export const READER_HTML = `
<div data-bind="if: assignment">
    ${EDITOR_HTML}
    <!-- Popout button -->
    <a href="" class="btn btn-sm btn-outline-secondary float-right m-3" target="_blank"
        data-bind="attr: {href: assignment().editUrl()+'&embed=true'}, visible: allowPopout()">
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
        <h3 data-bind="text: header(), hidden: !header().length" class="p-1"></h3>
        <div data-bind="text: summary(), hidden: !summary().length" class="p-1"></div>
        <!-- ko if: youtube().length && !video().length -->
        <div style="float: right" class="btn-group" role="group" data-bind="if: Object.keys(youtubeOptions()).length > 1">
            <button id="blockpy-reader-video-voice-choice" type="button" class="btn btn-outline-secondary dropdown-toggle"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                    
            </button>
            <div class="dropdown-menu" aria-labelledby="blockpy-reader-video-voice-choice"
                data-bind="foreach: Object.keys(youtubeOptions())"">
                <a href="" data-bind="text : $data,
                                      click: ()=>$parent.setVoice($data, $parent.youtubeOptions()[$data]),
                                      css: {active: $parent.youtubeOptions()[$data] === $parent.youtube()}"
                    class="dropdown-item"></a>
            </div>
        </div>
        <!-- /ko -->
        <!-- ko if: video().length -->
        <div style="float: right" class="btn-group" role="group" data-bind="if: Object.keys(videoOptions()).length > 1">
            <button id="blockpy-reader-video-voice-choice" type="button" class="btn btn-outline-secondary dropdown-toggle"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                    
            </button>
            <div class="dropdown-menu" aria-labelledby="blockpy-reader-video-voice-choice"
                data-bind="foreach: Object.keys(videoOptions())"">
                <a href="" data-bind="text : $data,
                                      click: ()=>$parent.setVoiceVideo($data, $parent.videoOptions()[$data]),
                                      css: {active: $parent.videoOptions()[$data] === $parent.video()}"
                    class="dropdown-item"></a>
            </div>
        </div>
        <video data-bind="if: video().length" controls width="640" height="480"
            style="display: block; margin-left: auto; margin-right: auto;"
            crossorigin="anonymous" preload="metadata" class="reader-video-display">
            <source data-bind="attr: { src: video() + '#t=1' }" type="video/mp4" >
            <track data-bind="attr: { src: video().slice(0, -3) + 'vtt'}"
                default kind="captions" srclang="en" label="English">
        </video>
        <!-- /ko -->
        <iframe style="width: 640px; height: 480px; margin-left: 10%"
            width="300" height="150" allowfullscreen="allowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            id="reader-youtube-video"
            data-bind="attr: {title: assignment().name(),
                              src: 'https://www.youtube.com/embed/'+youtube()+'?feature=oembed&rel=0&enablejsapi=1'},
                       hidden: !youtube().length || video().length">
        </iframe>
        <div data-bind="markdowned: {value: assignment().instructions(), assignment: assignment, submission: submission}"
            class="p-4"></div>
        <hr>
    </div>
</div>
`

ko.components.register("reader", {
    viewModel: Reader,
    template: READER_HTML
});
