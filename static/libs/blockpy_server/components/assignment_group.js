/**
 */

ko.components.register('assignment-group', {
    viewModel: function(params) {
        // Validate schema data
        this.id = params.id;
    },
    template: `
        <div>Assignment Group</div>
    `
})