import * as ko from 'knockout';
import {TwoWayReadonlyMap} from "./plugins";
import {ajax_get} from "./server";
import {User, UserJson} from "./user";

export interface ModelJson {
    id: number;
    date_modified: Date;
    date_created: Date;
}

export abstract class Model<T extends ModelJson> {
    id: number;
    dateModified: ko.Observable<Date>;
    dateCreated: ko.Observable<Date>;
    FIELDS: TwoWayReadonlyMap = new TwoWayReadonlyMap({
        "date_modified": "dateModified",
        "date_created": "dateCreated"
    });

    protected constructor(data: T) {
        this.id = data.id;
        this.dateModified = ko.observable(data.date_modified);
        this.dateCreated = ko.observable(data.date_created);
    }

    fromJson(data: T) {
        this.FIELDS.lefts.forEach((left) => {
            // @ts-ignore
            this[this.FIELDS.get(left)](data[left]);
        });
    }

    koFromJson(data: T) {
        this.FIELDS.lefts.forEach((left) => {
            // @ts-ignore
            this[this.FIELDS.get(left)] = ko.observable(data[left]);
        });
    }

    toJson(): T {
        let data = {id: this.id};
        // @ts-ignore
        this.FIELDS.rights.forEach((right) => data[this.FIELDS.get(right)]=this[right]());
        return <T>data;
    }

}

export abstract class ModelStore<J extends ModelJson, T extends Model<J>> {
    private data: Record<number, T>;
    protected courseId: number|null;

    private timer: number;
    private delayedData: T[];

    constructor(courseId: number|null) {
        this.data = {};
        this.courseId = courseId;
        this.delayedData = [];
        this.timer = null;
    }

    getInstance(id: number): T {
        if (this.data[id] !== undefined) {
            return this.data[id];
        } else {
            let delayedInstance = this.makeEmptyInstance(id);
            this.delayLoadInstance(delayedInstance);
            this.data[id] = delayedInstance;
            return delayedInstance;
        }
    }

    delayLoadInstance(instance: T) {
        clearTimeout(this.timer);
        this.delayedData.push(instance);
        this.queueFinishDelay();
    }

    queueFinishDelay() {
        if (this.delayedData.length > 25) {
            this.finishDelayedLoads();
        } else if (this.delayedData.length > 0) {
            this.timer = window.setTimeout(this.finishDelayedLoads.bind(this), 1000);
        }
    }

    getInstances(ids: number[]) {
        return ids.map(this.getInstance.bind(this));
    }

    abstract getUrl(): string;
    abstract getPayload(): any;
    abstract makeEmptyInstance(id: number): T;
    abstract GET_FIELD: string;

    finishDelayedLoads() {
        let payload = this.getPayload();
        let url = this.getUrl();
        return ajax_get(this.getUrl(), this.getPayload()).then((data) => {
           if (data.success) {
               let results = data[this.GET_FIELD];
               let created = results.map( (modelJson: J) => {
                   this.data[modelJson.id].fromJson(modelJson);
                   return modelJson.id;
               });
               this.removeDelayedInstances(created);
           } else {
               console.error(data);
           }
        });
    }

    protected getDelayedIds(): number[] {
        return this.delayedData.map((instance: T) => instance.id);
    }

    removeDelayedInstances(ids: number[]) {
        this.delayedData = this.delayedData.filter((delayedInstance: T) => !ids.includes(delayedInstance.id));
        this.queueFinishDelay();
    }
}