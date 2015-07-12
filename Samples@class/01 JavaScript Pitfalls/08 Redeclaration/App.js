(function () {

    function x() {
        console.log("1");
    }

    x();

    function updateData() {
    }

})();

(function () {

    function x() {
        console.log("2");
    }

    x();

    updateData();

})();
