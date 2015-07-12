var Point = (function () {

    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    Point.prototype.dump = function () {
        console.log("X = " + this.x);
        console.log("Y = " + this.y);
    }

    Point.prototype.move = function (dx, dy) {
        this.x += dx;
        this.y += dy;
    }

    return Point;

})();
