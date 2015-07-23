var app = angular.module("MyApp", ["ngRoute"]).config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            controller: "HomeCtrl",
            templateUrl: "Home.html",
        })
        .when("/about", {
            controller: "AboutCtrl",
            templateUrl: "About.html",
        })
        .otherwise({
            redirectTo: "/"
        });
});
