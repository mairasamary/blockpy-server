import * as ko from 'knockout';
import {Model, ModelJson, ModelStore} from "./model";
import {capitalize, TwoWayReadonlyMap} from "../components/plugins";
import {ajax_get} from "../components/server";

export enum ServiceType {
    NATIVE= "native",
    LTI = "lti"
}

export enum CourseVisibility {
    PRIVATE="private",
    PUBLIC="public"
}

export interface CourseJson extends ModelJson {
    id: number;
    name: string;
    url: string;
    owner_id: number;
    service: ServiceType;
    external_id: string;
    endpoint: string;
    visibility: CourseVisibility;
    term: string;
    settings: string;
}

export class Course extends Model<CourseJson> {
    id: number;
    name: KnockoutObservable<string>;
    url: KnockoutObservable<string>;
    ownerId: KnockoutObservable<number>;
    service: KnockoutObservable<ServiceType>;
    externalId: KnockoutObservable<string>;
    endpoint: KnockoutObservable<string>;
    visibility: KnockoutObservable<CourseVisibility>;
    term: KnockoutObservable<string>;
    settings: KnockoutObservable<string>;

    FIELDS: TwoWayReadonlyMap = new TwoWayReadonlyMap({
        "name": "name",
        "url": "url",
        "owner_id": "ownerId",
        "service": "service",
        "external_id": "externalId",
        "endpoint": "endpoint",
        "visibility": "visibility",
        "term": "term",
        "settings": "settings"
    });

    constructor(data: CourseJson) {
        super(data);
        this.koFromJson(data);
    }
}

export class CourseStore extends ModelStore<CourseJson, Course> {
    GET_FIELD: string = "courses";

    getPayload(): any {
        return {
            course_id: this.courseId
        };
    }

    getUrl(): string {
        return "courses";
    }

    getLocalStorageKey(): string {
        return `BLOCKPY_COURSE_${this.courseId}_COURSES`;
    }

    makeEmptyInstance(id: number): Course {
        return new Course({
            id: id,
            date_created: null,
            date_modified: null,
            endpoint: "",
            external_id: "",
            name: "Unknown Course",
            owner_id: null,
            service: null,
            settings: "",
            term: "Unknown term",
            url: "",
            visibility: null
        });
    }
}

export const CourseTemplate = `
    <div>Course: <span data-bind="text: name"></span></div>
`;

ko.components.register("course", {
    viewModel: Course,
    template: CourseTemplate
});
