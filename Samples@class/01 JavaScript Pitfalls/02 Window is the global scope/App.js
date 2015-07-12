

(function () {
    if (!window.JSON) {
        window.JSON = {
        };
    }

    var originalSetTimeout = window.setTimeout;
    window.setTimeout = function () {
    }

})();


console.log(data);