var obj1 = {
    id: 123,
};

var obj2 = {
    id: 123,
    id2: 456,
};

obj1[getFieldName()] = "ABC";

function getFieldName() {
    return "name";
}

var map = {
};

map["a"] = "aa";
map["b"] = "bb";

for (var key in map) {
    console.log(key);
    console.log(map[key]);
}

map["a"] = undefined;

delete map["a"];

for (var key in map) {
    console.log(key);
    console.log(map[key]);
}
