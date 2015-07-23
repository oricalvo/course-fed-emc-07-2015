(function () {

    function HomeCtrl($scope, contactService) {

        $scope.refresh = function () {
            contactService.getAll().then(function (res) {
                $scope.contacts = res;
            }).catch(function (err) {
                alert("ERROR: " + err.message);
            });
        }

        $scope.refresh();
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
