/// <reference path="Point.js" />

var PointEx = (function () {

    function PointEx(x, y, z) {
        Point.call(this, x, y);
        
        this.z = z;
    }

    inherit(PointEx, Point);

    PointEx.prototype.dump = function () {

        Point.prototype.dump.call(this);

        console.log("Z = " + this.z);
    }

    return PointEx;

})(Point);

function inherit(derived, base) {
    derived.prototype = Object.create(base.prototype);
    derived.prototype.constructor = derived;
}
