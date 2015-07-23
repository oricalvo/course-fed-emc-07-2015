(function () {

    function GroupAddCtrl($scope) {
        $scope.items = [
        ];

        $scope.add = function () {
            var group = {
                id: -1,
                name: $scope.name
            };

            group
        }
    }

    angular.module("MyApp").controller("GroupAddCtrl", GroupAddCtrl);

})();
