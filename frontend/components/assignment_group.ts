import * as ko from 'knockout';

export class AssignmentGroupJson {
    id: number;
    name: string;
}

export class AssignmentGroup {
    id: number;
    name: KnockoutObservable<string>;

    constructor(data: AssignmentGroupJson) {
        this.id = data.id;
        this.name = ko.observable<string>(data.name);
    }

}

export const AssignmentGroupTemplate = `
    <div>Assignment Group: <span data-bind="text: name()"></span></div>
`;

ko.components.register("assignment-group", {
    viewModel: AssignmentGroup,
    template: AssignmentGroupTemplate
});