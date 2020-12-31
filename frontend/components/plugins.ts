import * as ko from 'knockout';
import * as CodeMirror from 'codemirror';

// Knockout codemirror binding handler
ko.bindingHandlers.codemirror = {
    init: function (element, valueAccessor) {
        let options = ko.unwrap(valueAccessor());
        element.editor = CodeMirror(element, ko.toJS(options));
        element.editor.on('change', function (cm: any) {
            options.value(cm.getValue());
        });

        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
            let wrapper = element.editor.getWrapperElement();
            wrapper.parentNode.removeChild(wrapper);
        });
    },
    update: function (element, valueAccessor) {
        let value = ko.toJS(valueAccessor()).value;
        if (element.editor) {
            let cur = element.editor.getCursor();
            element.editor.setValue(value);
            element.editor.setCursor(cur);
            element.editor.refresh();
        }
    }
};


// https://stackoverflow.com/a/60766129
export class TwoWayReadonlyMap {
    map: Map<string, string>;
    lefts: string[];
    rights: string[];

    constructor(map: Record<string, string>) {
        this.map = new Map<string, string>();
        this.lefts = [];
        this.rights = [];
        for (let member in map) {
            this.lefts.push(member);
            this.rights.push(map[member]);
            this.map.set(member, map[member]);
            this.map.set(map[member], member);
        }
    }

    get(key: string) {
        return this.map.get(key);
    }
}

export function capitalize(str: string): string {
    if (typeof str !== 'string') {
        return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}