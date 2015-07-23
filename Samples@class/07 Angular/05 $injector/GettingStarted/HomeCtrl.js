(function () {

    function HomeCtrl($scope, $injector) {
        var $http = $injector.get("$http");

        f.$inject = ["$compile"];
        function f(a) {
            console.log(!!a);
        }

        $injector.invoke(f);


        //$injector.invoke(["$compile", function (a) {
        //    console.log(!!a);
        //}]);

        $scope.message = "Hello Angular";

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
