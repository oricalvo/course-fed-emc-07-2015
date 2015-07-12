function changeStr(str) {
    str.value = "XXX";
}

var str = {
    value: "ABC"
};

changeStr(str);

console.log(str.value);

function g() {
    var x;

    x = 8;
    x = 1.2;
    x = true;
    x = undefined;

    x = {
        id: 12,
    };

    x = function () {
    }
}