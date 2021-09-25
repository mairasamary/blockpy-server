import * as ko from 'knockout';
import * as CodeMirror from 'codemirror';
import * as hljs from 'highlight.js';
import * as select2 from 'select2';
//import 'select2';
import 'knockout-switch-case';
import * as MarkdownIt from 'markdown-it';
import JSONEditor, {JSONEditorMode} from 'jsoneditor';
// The CSS for jsoneditor is loaded via assets.py
//import 'jsoneditor/dist/jsoneditor.css';



// Knockout codemirror binding handler
ko.bindingHandlers.codemirror = {
    init: function (element, valueAccessor) {
        let options = ko.unwrap(valueAccessor());
        element.editor = CodeMirror(element, ko.toJS(options));
        element.editor.on('change', function (cm: any) {
            if (!options.readOnly) {
                options.value(cm.getValue());
            }
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

// Knockout jsoneditor binding handler
ko.bindingHandlers.jsoneditor = {
    init: function (element, valueAccessor) {
        let initialValue = ko.unwrap(valueAccessor());
        let options =  {
            onChangeText:  function (newValue: any) {
                element.flag = true;
                initialValue.value(newValue);
            },
            modes: ['tree', 'code', 'text'] as JSONEditorMode[],
            mode: 'code' as JSONEditorMode
        };
        element.editor = new JSONEditor(element, options, JSON.parse(initialValue.value() || "{}"));

        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
            element.editor.destroy();
        });
    },
    update: function (element, valueAccessor) {
        let value = ko.toJS(valueAccessor()).value;
        if (element.flag) {
            element.flag = false;
        } else {
            element.editor.set(JSON.parse(value || "{}"));
        }
    }
};

// Knockout jsoneditor binding handler
ko.bindingHandlers.markdowneditor = {
    init: function (element, valueAccessor) {
        let initialValue = ko.unwrap(valueAccessor());
        // @ts-ignore
        element.editor = new EasyMDE({
            element: element,
            autoDownloadFontAwesome: false,
            forceSync: true,
            minHeight: "500px",
            // TODO: imageUploadFunction
            renderingConfig: {
                codeSyntaxHighlighting: true,
            },
            indentWithTabs: false,
            tabSize: 4,
        });
        element.editor.codemirror.on("change", (newValue: any) => {
            element.flag = true;
            initialValue.value(element.editor.value());
        })
        element.editor.value(initialValue.value());
        element.flag = false;

        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
            //element.editor.cleanup();
            element.editor = null;
        });
    },
    update: function (element, valueAccessor) {
        let value = ko.toJS(valueAccessor()).value;
        if (element.flag) {
            element.flag = false;
        } else {
            element.editor.value(value);
        }
    }
};

// Highlighted Code Area
hljs.configure({
    languages: ["python"]
})
ko.bindingHandlers.highlightedCode = {
    update: function (element, valueAccessor) {
        let code = ko.unwrap(valueAccessor());
        element.innerHTML = code;
        hljs.highlightBlock(element);
        if (code.trim()) {
            // @ts-ignore
            hljs.lineNumbersBlock(element);
        }
    }
};

export let md = new MarkdownIt({
    html: true,
    highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
          // @ts-ignore
          return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  }
});

ko.bindingHandlers.markdowned = {
    update: function (element, valueAccessor) {
        let code = ko.unwrap(valueAccessor());
        element.innerHTML = md.render(code);
        let codeBlocks = element.querySelectorAll("pre code");
        codeBlocks.forEach((block: HTMLElement) => hljs.highlightBlock(block));
        //hljs.highlightBlock(element.querySelector("pre code"));
        /*if (code.trim()) {
            hljs.lineNumbersBlock(element.querySelector("pre code"));
        }*/
    }
};


/**
 * https://github.com/knockout/knockout/issues/416#issuecomment-4877853
 * Adds a new function to the ObservableArray class to efficiently push multiple values
 * @param valuesToPush
 */
export function pushObservableArray<T>(array: KnockoutObservableArray<T>, values: T[]): KnockoutObservableArray<T> {
    let underlyingArray = array();
    array.valueWillMutate();
    ko.utils.arrayPushAll(underlyingArray, values);
    array.valueHasMutated();
    return array;
}

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

export function last<T>(array: T[]): T {
    return array[array.length - 1];
}

/*
ko.bindingHandlers.select2 = {
    after: ["options", "value"],
    init: function (el, valueAccessor, allBindingsAccessor, viewModel) {
        $(el).select2(ko.unwrap(valueAccessor()));
        ko.utils.domNodeDisposal.addDisposeCallback(el, function () {
            $(el).select2('destroy');
        });
    },
    update: function (el, valueAccessor, allBindingsAccessor, viewModel) {
        var allBindings = allBindingsAccessor();
        var select2 = $(el).data("select2");
        if ("value" in allBindings) {
            var newValue = "" + ko.unwrap(allBindings.value);
            if ((allBindings.select2.multiple || el.multiple) && newValue.constructor !== Array) {
                // @ts-ignore
                select2.val([newValue.split(",")]);
            }
            else {
                // @ts-ignore
                select2.val([newValue]);
            }
        }
    }
};*/


ko.bindingHandlers.multiselect = {
    init: function (element, valueAccessor, allBindingAccessors) {
        let options = valueAccessor();

        // Pay attention to model updates
        ko.bindingHandlers['options'].update(element, () => options.options, allBindingAccessors);
        // TypeScript thinks that this bindingHandler has a smaller number of args for some reason
        // @ts-ignore
        ko.bindingHandlers['selectedOptions'].init(element, () => options.selectedOptions, allBindingAccessors);
        // @ts-ignore
        ko.bindingHandlers['selectedOptions'].update(element, () => options.selectedOptions, allBindingAccessors);

        // @ts-ignore
        $(element).multiSelect(options.config);


        //make view model know about select/deselect changes
        // @ts-ignore
        $(element).multiSelect({
            afterSelect: function (values: any) {
                for (let i = 0; i < values.length; i += 1) {
                    options.selectedOptions.push(values[i]);
                }
            }, afterDeselect: function (values: any) {
                for (let i = 0; i < values.length; i += 1) {
                    options.selectedOptions.remove(values[i]);
                }
            }
        });
    },
    update: function (element, valueAccessor, allBindingAccessors) {
        let options = valueAccessor();
        console.log(options.options(), options.selectedOptions());
        //update html if items set through code
        // @ts-ignore
        ko.bindingHandlers.selectedOptions.update(element, () => options.selectedOptions, allBindingAccessors);
        options.options().forEach((option: any) => {
            // @ts-ignore
            $(element).multiSelect("addOption", {value: option.id, text: option[options.optionsText]()})
        });

        // @ts-ignore
        $(element).multiSelect("refresh");
    }
};

/** assumes array elements are primitive types
 * check whether 2 arrays are equal sets.
 * @param  {} a1 is an array
 * @param  {} a2 is an array
 */
export function areArraysEqualSets(a1: number[], a2: number[]) {
    const superSet: Record<number, number> = {};
    for (const i of a1) {
        superSet[i] = 1;
    }

    for (const i of a2) {
        if (!superSet[i]) {
            return false;
        }
        superSet[i] = 2;
    }

    for (let i in superSet) {
        if (superSet[i] === 1) {
            return false;
        }
    }

    return true;
}

/** Simple binding for handling optgroups **/
ko.bindingHandlers.option = {
    update: function(element, valueAccessor) {
       let value = ko.utils.unwrapObservable(valueAccessor());
       ko.selectExtensions.writeValue(element, value);
    }
};

