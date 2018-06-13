var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
(function () {
    var _a;
    function sumMatrix(matrix) {
        var sum = 0;
        for (var i = 0; i < matrix.length; i++) {
            var currentRow = matrix[i];
            for (var i = 0; i < currentRow.length; i++) {
                sum += currentRow[i];
            }
        }
        return sum;
    }
    function sumMatrixA(matrix) {
        var sum = 0;
        for (var i = 0; i < matrix.length; i++) {
            var currentRow = matrix[i];
            for (var i_1 = 0; i_1 < currentRow.length; i_1++) {
                sum += currentRow[i_1];
            }
        }
        return sum;
    }
    console.log('对比两个的问题，作用域');
    console.log(sumMatrix([[1, 2, 3], [4, 5, 6]]));
    console.log(sumMatrixA([[1, 2, 3], [4, 5, 6]]));
    function fA(condition, x) {
        if (condition) {
            var x_1 = 100;
            return x_1;
        }
        return x;
    }
    fA(false, 0);
    fA(true, 0);
    var numLivesForCat = 9;
    var kitty = {
        name: 'Aurora',
        numLives: numLivesForCat
    };
    kitty.name = 'Rory';
    kitty.name = 'Kitty';
    kitty.name = 'Cat';
    kitty.numLives--;
    var input = [1, 2];
    var first = input[0], second = input[1];
    console.log(first);
    console.log(second);
    _a = [second, first], first = _a[0], second = _a[1];
    console.log(second);
    function f(_a) {
        var first = _a[0], second = _a[1];
        console.log(first);
        console.log(second);
    }
    f(input);
    var _b = [1, 2, 3, 4], firstA = _b[0], restA = _b.slice(1);
    console.log(firstA);
    console.log(restA);
    var firstB = [1, 2, 3, 4][0];
    console.log(firstB);
    var _c = [1, 2, 3, 4], secondB = _c[1], fourthB = _c[3];
    var o1 = {
        a1: "foo",
        b1: 12,
        c1: "bar"
    };
    var a1 = o1.a1, b1 = o1.b1;
    var _d = { a3: "baz", b3: 101 }, a3 = _d.a3, b3 = _d.b3;
    var o2 = {
        a2: "foo",
        b2: 12,
        c2: "bar"
    };
    var a2 = o2.a2, passthrough = __rest(o2, ["a2"]);
    var total = passthrough.b2 + passthrough.c2.length;
    var newName1 = o1.a1, newName2 = o1.b1;
    var newName3 = o1.a1, newName4 = o1.b1;
    console.log(newName3, newName4);
    function keepWholeObject(wholeObject) {
        var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
    }
    keepWholeObject({ a: 'str' });
    function keepWholeObject1(a, b) {
        if (b === void 0) { b = 1001; }
        console.log('keepWholeObject1', b);
    }
    keepWholeObject1();
    function fB(_a) {
        var a = _a.a, b = _a.b;
        console.log(a);
    }
    fB({ a: 'str' });
    function fC(_a) {
        var _b = _a === void 0 ? { a: "", b: 0 } : _a, a = _b.a, b = _b.b;
        console.log('这也是设定初始值和类型', b);
    }
    fC();
    function fD(_a) {
        var _b = _a === void 0 ? { a: "" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
        console.log("a = " + a + ", b = " + b);
    }
    fD({ a: "yes" });
    fD();
})();
{
    var first = [1, 2];
    var second = [3, 4];
    var bothPlus = [0].concat(first, second, [5]);
    var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
    var search = __assign({ food: "rich" }, defaults);
    var C = (function () {
        function C() {
            this.p = 12;
        }
        C.prototype.m = function () {
        };
        return C;
    }());
    var c = new C();
    var clone = __assign({}, c);
    clone.p;
    c.m();
}
