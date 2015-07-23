(function () {

    function GroupAddCtrl($scope, $rootScope) {
        $scope.items = [
        ];

        $scope.add = function () {
            var group = {
                id: -1,
                name: $scope.name
            };


            $rootScope.broadcast("onAddingGroup");
            //$scope.$emit("onAddingGroup", group);
        }
    }

    angular.module("MyApp").controller("GroupAddCtrl", GroupAddCtrl);

})();
