var MyApp = MyApp || {};

MyApp.OfflineStorage = (function (Network) {

    var lastModified = "???";

    function getAllContacts() {
        console.log("OfflineStorage.getAllContacts");

        Network.httpGet("/api/contact");
    }

    return {
        getAllContacts: getAllContacts,
    };

})(MyApp.Network);
