import * as ko from 'knockout';
import {Server} from "./server";
import {User} from "../models/user";
import {Assignment} from "../models/assignment";
import {Submission} from "../models/submission";
import {AssignmentInterface, AssignmentInterfaceJson} from "./assignment_interface";

// TODO: Prevent popout button in exams, allow easy to close button there too?
// TODO: Render youtube video, header, and download button

export const LOG_TIME_RATE = 5000;

export class Reader extends AssignmentInterface {
    logTimer: NodeJS.Timeout
    logCount: number
    ytPlayer: any

    constructor(params: AssignmentInterfaceJson) {
        super(params);
        this.logCount = 0;

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
                        console.log(this.assignment());
                        this.logCount = 1;
                        this.logTimer = setTimeout(this.logReading.bind(this), 1000);
                        this.assignment().instructions.subscribe(this.registerWatcher.bind(this));
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

    logWatching(event: any) {
        console.log(event);
        if (this.assignment()) {
            this.logEvent("Resource.View", "reading", "watch",
                JSON.stringify({
                    "event": event.data,
                    "time": this.ytPlayer.getCurrentTime()
                }), this.assignment().url(), () => {})
        }
    }

    registerWatcher() {
        let youtubes = $("iframe[src^='https://www.youtube.com']");
        // TODO: Map it over any youtube videos
        let url = youtubes.attr("src");
        let id = url.replace(/.*\/(\w+)\/?.*$/, '$1');
        youtubes.attr("id", id);
        // @ts-ignore
        this.ytPlayer = new YT.Player(id, {
            events: {
                'onStateChange': this.logWatching.bind(this)
            }
        });
        console.log("IFrames:", youtubes.attr("src"))
    }

    logReading() {
        this.logCount += 1;
        let delay = this.logCount * LOG_TIME_RATE;
        let position = $(window).scrollTop();
        let height = ($(document).height() - $(window).height());
        let progress = 100* position / height;
        console.log(this.logCount, delay, this.assignment());
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
    }
}

// TODO: Pop out button to put into another frame
// TODO: Log all youtube and scrolling


export const READER_HTML = `
<div data-bind="if: assignment">
    <!-- Popout button -->
    <a href="" class="btn btn-sm btn-outline-secondary float-right" target="_blank"
        data-bind="attr: {href: assignment().editUrl()+'&embed=true'}">
        <span class="fas fa-external-link-alt" aria-hidden="true"></span>
        Popout
    </a>
    <!-- Body -->
    <div data-bind="markdowned: assignment().instructions()" style="background: #FBFAF7"
        class="p-4"></div>
    <hr>
    <h6>Instructions</h6>
    <button data-bind="click: saveAssignment">Save Assignment</button><br>
    <textarea data-bind="value: assignment().instructions" style="width: 100%; height: 300px"></textarea><br>
</div>
`

ko.components.register("reader", {
    viewModel: Reader,
    template: READER_HTML
});
