(function () {

    function HomeCtrl($scope, $location) {
        $scope.run = function () {
            $location.url("blabla");
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
