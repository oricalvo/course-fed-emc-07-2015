(function ($) {

    $(function () {

        var viewModel = {
            contacts: ko.observableArray([]),
        };

        ko.applyBindings(viewModel);

        $.ajax({
            type: "GET",
            url: "http://localhost:1441/contacts.html",
            dataType: "jsonp",
            success: function (contacts) {
                viewModel.contacts(contacts);
            },
            error: function () {
                console.log("ERROR");
            }
        });
    });

})(jQuery);

function runResponse(data) {
    console.log(data.length);
}
