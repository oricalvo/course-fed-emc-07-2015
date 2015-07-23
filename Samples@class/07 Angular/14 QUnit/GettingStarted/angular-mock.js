(function () {

    var modules = {};

    window.angular = {
        module: function (name) {
            var module = modules[name] = modules[name] || {};

            return {
                service: function (name, ctor) {
                    module[name] = ctor;
                }
            };
        },

        instantiate: function (moduleName, ctorName) {
            return new modules[moduleName][ctorName]();
        }
    };

})();
