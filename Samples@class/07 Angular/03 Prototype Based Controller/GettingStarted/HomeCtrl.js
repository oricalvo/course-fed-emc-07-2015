﻿(function () {

    function HomeCtrl() {
        this.message = "Hello Angular";

        this.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
    }

    HomeCtrl.prototype.sayHello = function () {
        alert("Hello");
    }

    HomeCtrl.prototype.add = function () {
        this.contacts.push({
            id: -1,
            name: this.name,
        });
    }}

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

})();

