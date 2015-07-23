(function () {

    function HomeCtrl($scope, $rootScope) {
        $scope.nums = [1, 2, 2, 3];

        $scope.nums = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Ori" },
            { id: 3, name: "Ori" },
            { id: 4, name: "Ori" }
        ];

        $scope.birthday = new Date();

        $scope.run = function () {
            $scope.nums[0].name = "XXX";

            var tmp = $scope.nums[0];
            $scope.nums[0] = $scope.nums[1];
            $scope.nums[1] = tmp;

            //$scope.nums.forEach(function (contact) {
            //    console.log(contact.$$hashKey);
            //});
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();
