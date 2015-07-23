(function () {

    function HomeCtrl($scope, $rootScope) {
        $scope.page = "groupAdd";

        $scope.gotoGroupAdd = function () {
            $scope.page = "groupAdd";
        }

        $scope.gotoGroupIndex = function () {
            $scope.page = "groupIndex";
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
