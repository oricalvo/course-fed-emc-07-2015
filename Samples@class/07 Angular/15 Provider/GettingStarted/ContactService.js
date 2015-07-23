(function () {

    //function ContactService() {
    //    console.log("ContactService.ctor");

    //    this.contacts = [
    //        { id: 1, name: "Ori" },
    //        { id: 2, name: "Roni" },
    //    ];
    //}

    //ContactService.prototype.getAll = function () {
    //    return this.contacts;
    //}

    //function ContactServiceProvider() {
    //}

    //ContactServiceProvider.prototype.$get = function () {
    //    return new ContactService(this.cacheEnabled);
    //}

    //ContactServiceProvider.prototype.enableCaching = function () {
    //    this.cacheEnabled = true;

    //    console.log("enableCaching");
    //}

    //angular.module("MyApp").provider("contactService", ContactServiceProvider);

    angular.module("MyApp").provider("contactService", function () {
        var cacheEnabled = false;

        return {
            $get: function () {
                return {
                    getAll: function () {
                    }
                };
            },

            enableCaching: function () {
                cacheEnabled = true;
            }
        };
    });

})();
