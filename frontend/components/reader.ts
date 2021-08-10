import * as ko from 'knockout';
import {Server} from "./server";
import {User} from "../models/user";
import {Assignment} from "../models/assignment";
import {Submission} from "../models/submission";

export interface ReaderJson {
    server: Server;
    courseId: number;
    user: User;
    currentAssignmentId: ko.Observable<number>;
    assignmentGroupId: number;
}

export class Reader {
    server: Server;
    courseId: number;
    user: User;
    assignmentGroupId: number;

    currentAssignmentId: ko.Observable<number>;
    assignment: ko.Observable<Assignment>;
    submission: ko.Observable<Submission>;

    constructor(params: ReaderJson) {
        this.server = params.server;
        this.courseId = params.courseId;
        this.user = params.user;
        this.currentAssignmentId = params.currentAssignmentId;
        this.assignmentGroupId = params.assignmentGroupId;
        this.assignment = ko.observable(null);
        this.submission = ko.observable(null);

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
}

// TODO: Pop out button to put into another frame
// TODO: Log all youtube and scrolling


export const READER_HTML = `
<div data-bind="if: assignment">
<div data-bind="markdowned: assignment().instructions()" style="background: #FBFAF7"
    class="p-4"></div>
</div>
`

ko.components.register("reader", {
    viewModel: Reader,
    template: READER_HTML
});
