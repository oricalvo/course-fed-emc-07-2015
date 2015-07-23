(function () {

    function HomeCtrl($scope, $rootScope) {
        $scope.save = function () {
            console.log("Valid: " + $scope.form.$valid);
        }

        $scope.$watch(function () {
            $scope.vf = {};

            for (var key in $scope.form) {
                var value = $scope.form[key];

                if (value && value.$name) {
                    $scope.vf[value.$name] = getVF(value.$name);
                }
            }
        });

        function getVF(field) {
            var res = $scope.form[field].$invalid && ($scope.form[field].$touched || $scope.form.$submitted);
            return res;
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
