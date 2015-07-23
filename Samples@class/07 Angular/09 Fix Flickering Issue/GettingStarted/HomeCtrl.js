(function () {

    function HomeCtrl($scope, $rootScope) {
        $scope.message = "Hello";
        $scope.url = '/Component2.html';

        $scope.onComponentModeChanged = function () {
            $scope.url = ($scope.componentMode ? '/Component1.html' : '/Component2.html');
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
