QUnit.test("Verify that by default there are two contacts", function (assert) {

    var service = angular.instantiate("MyApp", "contactService");

    var contacts = service.getAll();

    assert.equal(contacts.length, 2);

});
