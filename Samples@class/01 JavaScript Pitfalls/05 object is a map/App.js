var obj = {};

function g() {
}

function h() {
}

var key1 = {
    id: 123,
};

var key2 = {
    name: "ABC",
};

console.log(key1.toString());
console.log(key2.toString());

obj[key1] = 12;

console.log(obj[key2]);


var nextUid = 1000;
var map = {};

function generateNextId() {
    return ++nextUid;
}

function add(key, value) {
    if (typeof key == "object") {
        key.$$uid = generateNextId();
        key = key.$$uid;
    }

    map[key] = value;
}

function get(key) {
    if (typeof key == "object") {
        key = key.$$uid;
    }

    return map[key];
}

if (Array.prototype.forEach) {
    Array.prototype.forEach = function () {
    }
}

var obj = {
    id: 123,
};

obj["id"] = 12;
obj.id = 12;

var fieldName = getFieldName();
obj[fieldName]

eval("obj." + fieldName + "= 12;");
