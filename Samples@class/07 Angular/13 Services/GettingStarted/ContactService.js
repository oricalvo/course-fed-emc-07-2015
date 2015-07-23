(function () {

    function ContactService() {
        console.log("ContactService.ctor");

        this.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
    }

    ContactService.prototype.getAll = function () {
        return this.contacts;
    }

    var instance = new ContactService();

    angular.module("MyApp").value("contactService", instance);

    //angular.module("MyApp").service("contactService", ContactService);

    //angular.module("MyApp").factory("contactService", function () {
    //    var contacts = [
    //        { id: 1, name: "Ori" },
    //        { id: 2, name: "Roni" },
    //    ];

    //    return {
    //        getAll: function () {
    //            return contacts;
    //        }
    //    };
    //});
})();
