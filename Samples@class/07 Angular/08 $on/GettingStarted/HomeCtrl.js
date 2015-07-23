(function () {

    function HomeCtrl($scope, $rootScope) {
        $scope.page = "groupAdd";
        $scope.items = [];

        $scope.$on("onAddingGroup", function (e, group) {
            console.log(e);

            $scope.page = "groupIndex";

            $scope.items.push(group);
        });

        $scope.gotoGroupAdd = function () {
            $scope.page = "groupAdd";
        }

        $scope.gotoGroupIndex = function () {
            $scope.page = "groupIndex";
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
