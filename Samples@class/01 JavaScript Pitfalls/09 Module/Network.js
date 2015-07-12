var MyApp = MyApp || {};

MyApp.Network = (function () {

    var baseAddress = "???";

    function httpGet(url) {
        console.log("Network.httpGet");
    }

    return {
        httpGet: httpGet,
    };

})();
