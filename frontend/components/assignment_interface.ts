import * as ko from 'knockout';
import {Server} from "./server";
import {User} from "../models/user";
import {Assignment} from "../models/assignment";
import {Submission} from "../models/submission";


export interface AssignmentInterfaceJson {
    server: Server;
    courseId: number;
    user: User;
    currentAssignmentId: ko.Observable<number>;
    assignmentGroupId: number;
    isInstructor: boolean;
}


export class AssignmentInterface {
    server: Server;
    courseId: number;
    user: User;
    assignmentGroupId: number;
    isInstructor: ko.Observable<boolean>;

    currentAssignmentId: ko.Observable<number>;
    assignment: ko.Observable<Assignment>;
    submission: ko.Observable<Submission>;

    constructor(params: AssignmentInterfaceJson) {
        this.server = params.server;
        this.courseId = params.courseId;
        this.user = params.user;
        this.currentAssignmentId = params.currentAssignmentId;
        this.assignmentGroupId = params.assignmentGroupId;
        this.isInstructor = ko.observable(params.isInstructor);
        this.assignment = ko.observable(null);
        this.submission = ko.observable(null);

        let BlockPyServer = window['$MAIN_BLOCKPY_EDITOR'].components.server;
        BlockPyServer.altLogEntry = this.logEvent.bind(this);
    }

    logEvent(eventType: string, category: string, label: string, message: string, file_path: string, callback: any) {
        let BlockPyServer = window['$MAIN_BLOCKPY_EDITOR'].components.server;
        let now = new Date();
        let data = {
            assignment_id: this.assignment().id,
            assignment_group_id: this.assignmentGroupId,
            course_id: this.courseId,
            submission_id: this.submission().id,
            user_id: this.user.id,
            version: this.assignment().version,
            timestamp: now.getTime(),
            timezone: now.getTimezoneOffset(),
            passcode: window['$MAIN_BLOCKPY_EDITOR'].model.display.passcode(),
            event_type: eventType,
            category: category,
            label: label,
            file_path: file_path,
            message: message
        };
        BlockPyServer._postRetry(data, "logEvent", 0, callback);
    }

    saveFile(filename: string, contents: string, block: boolean) {
        let BlockPyServer = window['$MAIN_BLOCKPY_EDITOR'].components.server;
        let now = new Date();
        let data = {
            assignment_id: this.assignment().id,
            assignment_group_id: this.assignmentGroupId,
            course_id: this.courseId,
            submission_id: this.submission().id,
            user_id: this.user.id,
            version: this.assignment().version,
            timestamp: now.getTime(),
            timezone: now.getTimezoneOffset(),
            passcode: window['$MAIN_BLOCKPY_EDITOR'].model.display.passcode(),
            filename: filename,
            code: contents
        };
        const onError = (e: any, textStatus: string, errorThrown: any) => {
            console.error("Failed to load (HTTP LEVEL)", e, textStatus, errorThrown);
        };
        const onSuccess = (response: any) => response.success && console.log(response);
        if (block) {
            BlockPyServer._postBlocking("saveFile", data, 3, () => 0, onSuccess, onError);
        } else {
            BlockPyServer._postLatestRetry(data, filename, "saveFile", 300, onError);
        }
    }

    saveAssignmentSettings(settings: Record<string, any>) {
        let BlockPyServer = window['$MAIN_BLOCKPY_EDITOR'].components.server;
        let now = new Date();
        let data = {
            assignment_id: this.assignment().id,
            assignment_group_id: this.assignmentGroupId,
            course_id: this.courseId,
            submission_id: this.submission().id,
            user_id: this.user.id,
            version: this.assignment().version,
            timestamp: now.getTime(),
            timezone: now.getTimezoneOffset(),
            passcode: window['$MAIN_BLOCKPY_EDITOR'].model.display.passcode(),
            ...settings
        };
        /*
            // New Stuff
            hidden: this.assignment().hidden(),
            reviewed: this.assignment().reviewed(),
            'public': this.assignment().public(),
            url: this.assignment().url(),
            points: this.assignment().points(),
            ip_ranges: this.assignment().ipRanges(),
            'name': this.assignment().name(),
            settings: this.assignment().settings()
        };*/

        const onError = (e: any, textStatus: string, errorThrown: any) => {
            window['$MAIN_BLOCKPY_EDITOR'].components.dialog.ERROR_SAVING_ASSIGNMNENT();
            console.error("Failed to load (HTTP LEVEL)", e, textStatus, errorThrown);
        };
        const onSuccess = (response: any) => response.success && console.log(response);
        BlockPyServer._postBlocking("saveAssignment", data, 3, () => 0, onSuccess, onError);
    }
}

export enum EditorMode {
    SUBMISSION = "SUBMISSION",
    RAW = "RAW",
    FORM = "FORM"
}
