class App2 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

	run() {
		console.log("run");
	}
}

class AppEx extends App2 {
    constructor(x, y) {
        super(x, y);
    }
}


var pt = new App2(5, 10);
pt.run();
