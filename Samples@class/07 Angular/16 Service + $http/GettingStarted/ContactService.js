(function () {
    
    angular.module("MyApp").factory("contactService", ["$http", "$q", function ($http, $q) {
        var contacts = null;

        return {
            getAll: function () {
                if (contacts != null) {
                    return $q.when(contacts);
                }

                return $http.get("/contacts.html").then(function (res) {
                    return contacts = res.data;
                }).catch(function (res) {
                    throw new Error("Failed to contact web server");
                });
            }
        };
    }]);

})();
