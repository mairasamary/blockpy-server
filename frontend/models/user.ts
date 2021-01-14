import * as ko from 'knockout';
import {Model, ModelJson, ModelStore} from "./model";
import {capitalize, TwoWayReadonlyMap} from "../components/plugins";
import {ajax_get} from "../components/ajax";

export interface RoleJson extends ModelJson {
    id: number;
    name: string;
    user_id: number;
    course_id: number;
}

export class Role extends Model<RoleJson> {
    id: number;
    userId: KnockoutObservable<number>;
    courseId: KnockoutObservable<number>;
    name: KnockoutObservable<string>;
    FIELDS: TwoWayReadonlyMap = new TwoWayReadonlyMap({
        "user_id": "userId",
        "course_id": "courseId",
        "name": "name",
        "date_modified": "dateModified",
        "date_created": "dateCreated"
    });

    constructor(data: RoleJson) {
        super(data);
        this.koFromJson(data);
    }
}

export interface UserJson extends ModelJson {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    roles?: RoleJson[];
}

export class User extends Model<UserJson> {
    id: number;
    email: KnockoutObservable<string>;
    firstName: KnockoutObservable<string>;
    lastName: KnockoutObservable<string>;
    roles: KnockoutObservableArray<Role>;
    FIELDS: TwoWayReadonlyMap = new TwoWayReadonlyMap({
        "email": "email",
        "first_name": "firstName",
        "last_name": "lastName"
    });
    name: KnockoutReadonlyComputed<string>;

    primaryRole: KnockoutReadonlyComputed<string>;

    constructor(data: UserJson) {
        super(data);
        this.koFromJson(data);
        this.name = ko.pureComputed(() => {
            return this.firstName() + " " + this.lastName();
        }, this);
        this.primaryRole = ko.pureComputed(() => {
            if (!this.roles().length) {
                return "User";
            } else {
                return this.roles().map((role: Role) =>
                    capitalize(role.name()
                        .replace("urn:lti:role:ims/lis/", ""))
                    ).join("/");
            }
        }, this);
    }

    koFromJson(data: UserJson) {
        super.koFromJson(data);
        let roles: Role[] = [];
        if (data.roles) {
            roles = data.roles.map((role: RoleJson) => new Role(role));
        }
        this.roles = ko.observableArray(roles);
    }

    fromJson(data: UserJson) {
        super.fromJson(data);
        this.roles.removeAll();
        if (data.roles) {
            data.roles.forEach((role: RoleJson) => this.roles.push(new Role(role)));
        }
    }

    toJson(): UserJson {
        let result: UserJson = super.toJson();
        result.roles = this.roles().map((role: Role) => role.toJson());
        return result;
    }
}

export class UserStore extends ModelStore<UserJson, User> {
    GET_FIELD: string = "users";

    getPayload(): any {
        return {
            user_ids: this.getDelayedIds().join(","),
            course_id: this.courseId
        };
    }

    getUrl(): string {
        return "courses/users";
    }

    getLocalStorageKey(): string {
        return `BLOCKPY_COURSE_${this.courseId}_USERS`;
    }

    makeEmptyInstance(id: number): User {
        return new User({
            id: id,
            email: "",
            date_created: null,
            date_modified: null,
            first_name: "",
            last_name: "Unknown"
        });
    }
}

export const UserTemplate = `
    <div>User: <span data-bind="text: name"></span></div>
`;

export const UserShortTemplate = `
    <div><span data-bind="text: primaryRole"></span>: <span data-bind="text: name"></span> (<span data-bind="text: email"></span>)</div>
`;

ko.components.register("user", {
    viewModel: User,
    template: UserTemplate
});

ko.components.register("user-short", {
    template: UserShortTemplate
})