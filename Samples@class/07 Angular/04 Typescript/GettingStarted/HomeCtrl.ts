declare var angular;

module MyApp {

    class HomeCtrl {
        message: string;
        contacts;
        name;

        constructor(){
            this.message = "Hello Angular";

            this.contacts = [
                { id: 1, name: "Ori" },
                { id: 2, name: "Roni" },
            ];
        }

        sayHello () {
            alert("Hello");
        }

        add () {
            this.contacts.push({
                id: -1,
                name: this.name,
            });
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
}
