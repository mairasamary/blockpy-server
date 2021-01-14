import {Server} from "./server";
import {Course} from "../models/course";
import {User} from "../models/user";
import * as ko from 'knockout';
import {Watcher, WatcherTemplate} from "./watcher";
import {prettyPrintDateTime} from "./dates";

export interface CourseListInterfaceJson {
    server: Server;
    courses: Course[];
    user: User;
}

export class CourseListInterface {
    server: Server;
    courses: Course[];
    user: User;

    constructor(params: CourseListInterfaceJson) {
        this.server = params.server;
        this.courses = params.courses;
        this.user = params.user;
        console.log("TEST");
    }

    getRole(id: number): string {
        let roles = this.user.roles();
        for (let i=0; i<roles.length; i+=1) {
            let role = roles[i];
            if (role.courseId() === id) {
                return role.name();
            }
        }
        return "No Role";
    }
}

export const COURSE_LIST_HTML = `
<ul class="list-unstyled">
<!-- ko foreach: courses -->
    <li class="media mt-2 border-bottom">
        <a data-bind="attr: {href: id}" class="btn btn-primary mr-3">
            <span class="fas fa-eye"></span> Open
        </a>
        <div class="media-body">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1" data-bind="text: name"></h5>
                <small class="text-muted" data-bind="text: prettyDateCreated"></small>
            </div>
            <p class="mb-1">
                Role: <span data-bind="text: $parent.getRole(id)" class="text-capitalize"></span><br>
                <p data-bind="text: term"></p>
            </p>
            <small class="text-muted" data-bind="if: url">
                Course URL: <span data-bind="text: url"></span>,
            </small>
            <small class="text-muted" data-bind="if: service()!=='native'">
                LMS: <span data-bind="text: service"></span>,
            </small>
            <small class="text-muted">
                Course ID: <span data-bind="text: id"></span>
            </small>
        </div>
    </li>
<!-- /ko -->
</ul>
`;

ko.components.register("course-list", {
    viewModel: CourseListInterface,
    template: COURSE_LIST_HTML
});

