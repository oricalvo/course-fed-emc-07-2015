(function () {

    function HomeCtrl($scope, $interval) {
        $scope.tn = 5;

        $scope.onTick = function (time) {
            console.log("Tick:" + time);
        }

        $scope.talkToComponent = function () {
            $scope.clock1.doSomething();
            $scope.clock2.doSomething();
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
