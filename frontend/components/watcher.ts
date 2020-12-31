/**
 * Watch grouping mode to combine assignments xor users
 * Live polling mode
 * Show recent events
 */

import * as ko from 'knockout';
import {Log, LogJson, REMAP_EVENT_TYPES} from "./log";
import {ajax_get} from "./server";
import {User, UserStore} from "./user";
import {prettyPrintDate, prettyPrintDateTime, prettyPrintTime} from "./dates";
import {Assignment, AssignmentStore} from "./assignment";

export enum WatchMode {
    FROZEN_LATEST, POLL, REVIEW
}

export class SubmissionHistory {
    // Canonical list of logs
    logs: KnockoutObservableArray<Log>;
    // Identity information
    user: User;
    assignment: Assignment;

    // Current values
    code: KnockoutObservable<string>;
    lastRan: KnockoutObservable<number>;


    watchMode: KnockoutObservable<WatchMode>;
    private isVcrActive: KnockoutReadonlyComputed<boolean>;
    private getWatchModeClass: KnockoutReadonlyComputed<string>;

    constructor(initialLog: Log, user: User, assignment: Assignment) {
        this.code = ko.observable("");
        this.logs = ko.observableArray([]);
        this.user = user;
        this.assignment = assignment;
        this.watchMode = ko.observable(WatchMode.FROZEN_LATEST);
        this.isVcrActive = ko.pureComputed(() => {
            return this.watchMode() === WatchMode.REVIEW;
        }, this);
        this.getWatchModeClass = ko.pureComputed(() => {
            switch (this.watchMode()) {
                case WatchMode.FROZEN_LATEST:
                    return "fa-pause-circle";
                case WatchMode.POLL:
                    return "fa-eye";
                case WatchMode.REVIEW:
                    return "fa-history";
            }
        }, this);
    }

    addLog(log: Log) {
        this.logs.push(log);
        if (log.eventType() === "File.Create" || log.eventType() === "File.Edit") {
            this.code(log.message())
        }
    }

    // Map CodeStates to event IDs so we can quickly get code? Or playback history to status at each step...

    loadHistorySelector(event: Event) {
        let selector = this.getSelector(event);
        let editId = 0;
        let optGroup: JQuery<JQuery.Node> = null;
        this.logs()
            .forEach((entry, index) => {
                let formattedDate = prettyPrintDate(entry.clientTimestamp());
                if (optGroup === null || optGroup.attr("label") != formattedDate) {
                    optGroup = $("<optgroup></optgroup>");
                    optGroup.attr("label", formattedDate);
                    selector.append(optGroup);
                }
                let eventType = REMAP_EVENT_TYPES[entry.eventType()] || entry.eventType();
                let displayed = prettyPrintTime(entry.clientTimestamp()) +" - "+eventType;
                let option = $("<option></option>", {text: displayed});
                option.attr("value", editId);
                editId += 1;
                optGroup.append(option);
            });
        selector.val(Math.max(0, editId-1));
        selector.on("change", (event: Event) => {
            this.viewLog(event);
        });
    }

    viewLog(event: Event) {
        let currentId = parseInt(<string>this.getSelector(event).val(), 10);
        let log = this.logs()[currentId];
        if (log.isEditEvent()) {
            this.code(log.message());
        }
    }

    switchWatchMode(data: any, event: Event) {
        switch (this.watchMode()) {
            case WatchMode.FROZEN_LATEST:
                this.watchMode(WatchMode.POLL);
                break;
            case WatchMode.POLL:
                this.loadHistorySelector(event);
                this.watchMode(WatchMode.REVIEW);
                break;
            case WatchMode.REVIEW:
                this.watchMode(WatchMode.FROZEN_LATEST);
                break;
        }
    }

    getSelector(event: Event) {
        return $(event.target).closest("div").find(".history-select");
    }

    moveToMostRecent(data: any, event: Event) {
        this.getSelector(event).val(this.logs().length-1);
        this.viewLog(event);
    }

    moveToBack(data: any, event: Event) {
        let currentId = parseInt(<string>this.getSelector(event).val(), 10);
        this.getSelector(event).val(Math.max(0, currentId-1));
        this.viewLog(event);
    }

    seekToBack(data: any, event: Event) {
        let currentId = parseInt(<string>this.getSelector(event).val(), 10);
        let log;
        do {
            currentId -= 1;
            log = this.logs()[currentId];
        } while (currentId>0 && !log.isEditEvent());
        this.getSelector(event).val(Math.max(0, currentId));
        this.viewLog(event);
    }

    moveToNext(data: any, event: Event) {
        let currentId = parseInt(<string>this.getSelector(event).val(), 10);
        this.getSelector(event).val(Math.min(this.logs().length-1, currentId+1));
        this.viewLog(event);
    }

    seekToNext(data: any, event: Event) {
        let currentId = parseInt(<string>this.getSelector(event).val(), 10);
        let log;
        do {
            currentId += 1;
            log = this.logs()[currentId];
        } while (currentId<this.logs().length-1 && !log.isEditEvent());
        this.getSelector(event).val(Math.min(this.logs().length-1, currentId));
        this.viewLog(event);
    }

    moveToStart(data: any, event: Event) {
        this.getSelector(event).val(0);
        this.viewLog(event);
    }
}

export const SubmissionHistoryCard = `
<div class="card">
    <span>Started, Edited, Ran, Completed</span>
    <span data-bind="component: {name: 'user-short', params: user}"></span>
    <span data-bind="component: {name: 'assignment-short', params: assignment}"></span>
    <div data-bind="codemirror: {
        mode: 'python',
        value: code,
        lineNumbers: true,
        readOnly: true
    }"></div>
</div>
`;

ko.components.register("submission-history-card", {
    template: SubmissionHistoryCard
});

export const SubmissionHistoryVCR = `
<div class="col-md-12" data-bind="visible: $parent.isVcrActive()">
    <form class="form-inline">
        <button class="btn btn-outline-secondary mr-2 btn-sm" type="button"
            data-bind="click: $parent.moveToStart.bind($parent)">
            <span class='fas fa-step-backward'></span> Start
        </button>
        <button class="btn btn-outline-secondary mr-2 btn-sm" type="button"
            data-bind="click: $parent.seekToBack.bind($parent)">
            <span class='fas fa-fast-backward'></span>
        </button>
        <button class="btn btn-outline-secondary mr-2 btn-sm" type="button"
            data-bind="click: $parent.moveToBack.bind($parent)">
            <span class='fas fa-backward'></span> Back
        </button>
        <select class="history-select form-control custom-select mr-2 custom-select-sm" aria-title="History Selector">
        </select>
        <button class="btn btn-outline-secondary mr-2 btn-sm" type="button"
            data-bind="click: $parent.moveToNext.bind($parent)">
            <span class='fas fa-forward'></span> Next
        </button>
        <button class="btn btn-outline-secondary mr-2 btn-sm" type="button"
            data-bind="click: $parent.seekToNext.bind($parent)">
            <span class='fas fa-fast-forward'></span>
        </button>
        <button class="btn btn-outline-secondary btn-sm" type="button"
            data-bind="click: $parent.moveToMostRecent.bind($parent)">
            <span class='fas fa-step-forward'></span> Most Recent
        </button>
    </form>
</div>
`;

ko.components.register("submission-history-vcr", {
    template: SubmissionHistoryVCR
});

export enum WatchGroupingMode {
    NONE, ASSIGNMENT, USER
}


export class Watcher {
    // Search options
    courseId: KnockoutObservable<number>;
    assignmentIds: KnockoutObservableArray<number>;
    userIds: KnockoutObservableArray<number>;

    // Stores
    userStore: UserStore;
    assignmentStore: AssignmentStore;

    // Actual data
    logs: KnockoutObservableArray<Log>;
    submissions: KnockoutObservableArray<SubmissionHistory>;
    cauToSubmission: { [cau: string]: SubmissionHistory};

    // Cosmetics
    grouping: KnockoutObservable<WatchGroupingMode>;


    constructor(data: any) {
        this.courseId = ko.observable<number>(data.courseId);
        this.assignmentIds = ko.observableArray<number>(data.assignmentIds);
        this.userIds = ko.observableArray<number>(data.userIds);
        this.grouping = ko.observable<WatchGroupingMode>(WatchGroupingMode.NONE);
        this.logs = ko.observableArray<Log>([]);
        this.submissions = ko.observableArray<SubmissionHistory>([]);
        this.cauToSubmission = {};
        this.userStore = new UserStore(data.courseId[0]);
        this.assignmentStore = new AssignmentStore(data.courseId[0]);
        $(this.getLatest.bind(this));
    }

    addLog(log: Log) {
        this.logs.push(log);
        let submissionId = log.getAsSubmissionKey();
        let submission = this.cauToSubmission[submissionId];
        if (submission === undefined) {
            let user = this.userStore.getInstance(log.subjectId());
            let assignment = this.assignmentStore.getInstance(log.assignmentId());
            submission = this.cauToSubmission[submissionId] = new SubmissionHistory(log, user, assignment);
            this.submissions.push(submission);
        }
        submission.addLog(log);
   }

    addLogs(logs: LogJson[]) {
        let userIds = [... new Set(logs.map((log: LogJson) => log.subject_id))];
        this.userStore.getInstances(userIds);
        logs.forEach((log: LogJson) => this.addLog(new Log(log)));
    }

    getLatest() {
        ajax_get("blockpy/load_history", {
            assignment_id: this.assignmentIds()[0],
            course_id: this.courseId(),
            user_id: this.userIds()[0],
        }).then((data) => {
            if (data.success) {
                this.addLogs(data.history);
            } else {
                console.error(data);
            }
        });
    }
}

export const WatcherTemplate = `
    <div>
        <div data-bind="foreach: submissions">
            <button class="btn btn-outline-secondary mr-2 btn-sm" type="button"
                data-bind="click: switchWatchMode">
                <span class='fas' data-bind="class: getWatchModeClass"></span>
            </button>
            <submission-history-vcr></submission-history-vcr>
            <submission-history-card params="code: code, user: user, assignment: assignment"></submission-history-card>
        </div>
        <div data-bind="foreach: logs">
            <span style='border: 1px solid black;' data-bind="text: eventType"></span>
        </div>
    </div>
`;

ko.components.register("watcher", {
    viewModel: Watcher,
    template: WatcherTemplate
});

