var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var App2 = (function () {
    function App2(x, y) {
        this.x = x;
        this.y = y;
    }
    App2.prototype.run = function () {
        console.log("run");
    };
    return App2;
})();
var AppEx = (function (_super) {
    __extends(AppEx, _super);
    function AppEx(x, y) {
        _super.call(this, x, y);
    }
    return AppEx;
})(App2);
var pt = new App2(5, 10);
pt.run();
