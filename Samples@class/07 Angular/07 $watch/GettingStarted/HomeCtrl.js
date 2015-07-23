(function () {

    function HomeCtrl($scope, $injector, $timeout) {

        $scope.message = "Hello";

        $scope.message = {
            text: "Hello",
        };

        $scope.change = function () {
            //$scope.message += "X";

            $scope.message.text += "X";
        }

        //$scope.$watchCollection("message", function (newValue, oldValue) {
        //    if (newValue == oldValue) {
        //        return false;
        //    }

        //    console.log("CHANGE: " + oldValue + " --> " + newValue);
        //});

        $scope.$watch("message", function (newValue, oldValue) {
            if (newValue == oldValue) {
                return false;
            }

            console.log("CHANGE: " + oldValue + " --> " + newValue);
        }, true);
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
