var Network = require("Network");

var lastModified = "???";

function getAllContacts() {
    console.log("OfflineStorage.getAllContacts");

    Network.httpGet("/api/contact");
}

exports.getAllContacts = getAllContacts;
