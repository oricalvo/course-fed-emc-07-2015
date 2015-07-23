(function () {

    function HomeCtrl($scope, contactService) {
        contactService.getAll().then(function (res) {
            $scope.contacts = res;
        }).catch(function (err) {
            alert("ERROR: " + err.message);
        });
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
