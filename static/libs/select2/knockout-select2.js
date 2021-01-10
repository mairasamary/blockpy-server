ko.bindingHandlers.select2 = {
init: function (el, valueAccessor, allBindingsAccessor, viewModel) {
    ko.utils.domNodeDisposal.addDisposeCallback(el, function () {
        $(el).select2('destroy');
    });

    var allBindings = allBindingsAccessor(),
        select2 = ko.utils.unwrapObservable(allBindings.select2);
    if (select2.remote) {
        $(el).append('<option value></option>');
        $(el).select2({
            ajax: {
                url: globalConfig.baseUrl + select2.url,
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    var parameters = {
                        query: params.term || '' // search term
                    };

                    if (select2.params !== undefined) {
                        $.each(Object.keys(select2.params), function (index, value) {
                            parameters[value] = select2.params[value]();
                        })
                    }
                    return parameters;
                },
                processResults: function (data, params) {

                    // parse the results into the format expected by Select2
                    // since we are using custom formatting functions we do not need to
                    // alter the remote JSON data, except to indicate that infinite
                    // scrolling can be used
                    params.page = params.page || 1;
                    var result = [];
                    $.each(data, function (index, value) {
                        result.push({ id: value.Id, text: value.Name })
                    })
                    return {
                        results: result,
                        //pagination: {
                        // more: (params.page * 30) < data.total_count
                        //}
                    };
                },
                cache: true
            },
            escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
            placeholder: select2.placeholder,
            allowClear: select2.allowClear
        });
    }
    else {
        $(el).select2(select2);
    }
},
update: function (el, valueAccessor, allBindingsAccessor, viewModel) {
    var allBindings = allBindingsAccessor();
    if ("value" in allBindings) {
        if ((allBindings.select2.multiple || el.multiple) && allBindings.value().constructor != Array) {
            $(el).val(allBindings.value().split(',')).trigger('change');
        }
        else {
            $(el).val(allBindings.value()).trigger('change');
        }
    } else if ("selectedOptions" in allBindings) {
        var converted = [];
        var textAccessor = function (value) { return value; };
        if ("optionsText" in allBindings) {
            textAccessor = function (value) {
                var valueAccessor = function (item) { return item; }
                if ("optionsValue" in allBindings) {
                    valueAccessor = function (item) { return item[allBindings.optionsValue]; }
                }
                var items = $.grep(allBindings.options(), function (e) { return valueAccessor(e) == value });
                if (items.length == 0 || items.length > 1) {
                    return "UNKNOWN";
                }
                return items[0][allBindings.optionsText];
            }
        }
        $.each(allBindings.selectedOptions(), function (key, value) {
            converted.push({ id: value, text: textAccessor(value) });
        });
        $(el).select2("data", converted);
    }
    $(el).trigger("change");
}
};