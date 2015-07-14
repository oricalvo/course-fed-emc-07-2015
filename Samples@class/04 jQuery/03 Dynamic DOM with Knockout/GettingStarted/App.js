$(function () {

    var contacts = [
        { id: 1, name: "Ori" },
        { id: 2, name: "Roni" }
    ];

    var viewModel = {
        name: ko.observable("ABC"),
        sayHello: function () {
            alert("Hello " + this.name());
        },
        reset: function () {
            this.name("");
        },
        contacts: contacts,
        remove: function () {
            alert("Removing " + this.id);
        },
    };

    ko.applyBindings(viewModel);
});
