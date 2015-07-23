(function () {

    function HomeCtrl($scope, $injector, $timeout) {

        $timeout(function () {
            $scope.message = "Hello Angular";
        }, 1000);

        setTimeout(function () {

            $scope.$apply(function () {
                $scope.message = "Hello Angular";
            });

        }, 1000);

        $scope.sayHello = function () {
            alert("Hello");
        }

        $scope.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];

        $scope.add = function () {
            $scope.contacts.push({
                id: -1,
                name: $scope.name,
            });
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
