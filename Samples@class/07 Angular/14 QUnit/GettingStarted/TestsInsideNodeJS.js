var QUnit = require("qunitjs");

QUnit.test("Verify that by default there are two contacts", function (assert) {

    var service = angular.instantiate("MyApp", "contactService");

    //var contacts = service.getAll();

    //assert.equal(contacts.length, 2);

});

QUnit.log(function (message) {
    console.log(message);
});

QUnit.done(function (res) {
    console.log(res);
});

QUnit.load();