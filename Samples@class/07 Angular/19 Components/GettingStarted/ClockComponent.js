
(function () {

    function ClockComponent($scope, $interval, $timeout, $attrs, $parse) {
        $interval(function () {
            var time = new Date(new Date().valueOf() + $scope.timezone * 1000 * 60 * 60);
            $scope.time = time;

            $scope.onTick({ time: time });
        }, 1000);

        if ($attrs.name) {
            var getter = $parse($attrs.name);
            var setter = getter.assign;
            setter($scope.$parent, this);
        }
    }

    ClockComponent.prototype.doSomething = function () {
        console.log("Doing something");
    }

    angular.module("MyApp").directive("clock", function () {
        var ddo = {
            restrict: "E",
            templateUrl: "/Clock.html",
            controller: ClockComponent,
            scope: {
                timezone: "=",
                onTick: "&",
            }
        };

        return ddo;
    });

})();
