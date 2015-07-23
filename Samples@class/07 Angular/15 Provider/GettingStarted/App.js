var app = angular.module("MyApp", []).config(function (contactServiceProvider) {
    contactServiceProvider.enableCaching();
});

app.filter("date", function () {
    return function (val, x, y) {
        console.log(x);

        return "ABC";
    }
});

