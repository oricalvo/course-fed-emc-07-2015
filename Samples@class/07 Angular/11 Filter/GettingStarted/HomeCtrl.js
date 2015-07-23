(function () {

    function HomeCtrl($scope, $rootScope) {
        $scope.birthday = new Date();

        $scope.run = function () {
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
