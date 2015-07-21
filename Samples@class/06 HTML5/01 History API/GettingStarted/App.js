(function ($) {

    var currentView = $(".active");

    var routes = {
        "/about": ".view-about",
        "/home": ".view-home",
    };

    window.addEventListener("popstate", function (e) {
        console.log("CHANGED: " + e.state);

        var state = e.state;
        if (!state) {
            changeView(".view-home");
        }
        else {
            changeView(state.selector);
        }
    });

    function navigate(url) {
        var selector = routes[url];
        if (!selector) {
            return false;
        }

        var newView = changeView(selector);

        var state = {
            selector: selector,
        };

        //history.pushState(state, null, url);

        window.location.hash = url;
    }

    function changeView(selector) {
        currentView.removeClass("active");

        var view = $(selector);
        currentView = view;
        currentView.addClass("active");
    }

    $(function () {
        $("body").on("click", "a", function () {

            var link = $(this);

            var url = link.attr("href");

            navigate(url);

            return false;
        });
    });

})(jQuery);
