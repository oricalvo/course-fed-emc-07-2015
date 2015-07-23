(function () {

    function HomeCtrl($scope, contactService) {
        $scope.contacts = contactService.getAll();
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
