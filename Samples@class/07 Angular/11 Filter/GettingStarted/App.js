var app = angular.module("MyApp", []);

app.filter("date", function () {
    return function (val, x, y) {
        console.log(x);

        return "ABC";
    }
});

