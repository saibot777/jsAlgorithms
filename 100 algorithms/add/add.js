function add() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var total = 0;
    params.forEach(function (num) {
        total += num;
    });
    return total;
}
console.log(add(1, 2, 3, 4, 5));
console.log(add(2, 3));
