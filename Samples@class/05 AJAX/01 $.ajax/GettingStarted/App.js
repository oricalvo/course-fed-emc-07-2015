(function ($) {

    $(function () {

        var contacts = [
        ];

        var viewModel = {
            contacts: ko.observableArray(contacts),
            send: function () {
                var contact ={
                    name: "BBB",
                };

                $.ajax({
                    type: "POST",
                    url: "/api/contact",
                    data: JSON.stringify(contact),
                    contentType: "application/json",
                    success: function () {
                        console.log("SUCCESS");
                    },
                    error: function () {
                        console.log("ERROR");
                    }
                });
            }
        };

        ko.applyBindings(viewModel);

        $.ajax({
            type: "GET",
            url: "/contacts.html",
            dataType: "json",
            success: function (contacts) {
                viewModel.contacts(contacts);
            },
            error: function () {
                console.log("ERROR");
            }
        });
    });

})(jQuery);
