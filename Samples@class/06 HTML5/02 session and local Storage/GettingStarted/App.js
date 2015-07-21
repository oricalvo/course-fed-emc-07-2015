(function ($) {

    var counter;
    var span;

    $(function () {

        //var storage = sessionStorage;
        var storage = localStorage;

        span = $("span");
        counter = storage.getItem("counter") || 0;

        updateUI();

        $("button").click(function () {
            ++counter;

            storage.setItem("counter", counter);

            updateUI();
        });

    });

    function updateUI() {
        span.text(counter);
    }

})(jQuery);
