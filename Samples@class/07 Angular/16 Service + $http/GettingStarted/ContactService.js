(function () {
    
    angular.module("MyApp").factory("contactService", ["$http", function ($http) {
        return {
            getAll: function () {
                return $http.get("/contacts.html").then(function (res) {
                    return res.data;
                }).catch(function (res) {
                    throw new Error("Failed to contact web server");
                });
            }
        };
    }]);

})();
