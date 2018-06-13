(function () {
    var isDone = false;
    var decLiteral = 6;
    var hexLiteral = 0xf00d;
    var binaryLiteral = 10;
    var octalLiteral = 484;
    var name = 'bob';
    name = 'smith';
    var nameA = "Gene";
    nameA = "Atao";
    var ageA = 37;
    var sentenceA = "Hello, my name is " + nameA + ".\n    \n    I'll be " + (ageA + 1) + " years old next month.";
    console.log(sentenceA);
    var list = [1, 2, 3];
    var listA = [1, 2, 3];
    var x;
    x = ['hello', 10];
    console.log(x[0].substr(1));
    x[2] = 'world';
    console.log(x[2].toString());
    console.log(x);
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    var c = Color.Green;
    console.log(Color);
    var ColorA;
    (function (ColorA) {
        ColorA[ColorA["Red"] = 3] = "Red";
        ColorA[ColorA["Green"] = 4] = "Green";
        ColorA[ColorA["Blue"] = 5] = "Blue";
    })(ColorA || (ColorA = {}));
    var cA = ColorA.Green;
    console.log(ColorA);
    var ColorB;
    (function (ColorB) {
        ColorB[ColorB["Red"] = 1] = "Red";
        ColorB[ColorB["Green"] = 2] = "Green";
        ColorB[ColorB["Blue"] = 4] = "Blue";
    })(ColorB || (ColorB = {}));
    var cB = ColorB.Green;
    var colorNameB = ColorB[2];
    console.log(colorNameB);
    var notSure = 4;
    notSure = 'maybe a string instead';
    notSure = false;
    var notSureA = 4;
    function warnUser() {
        alert('This is my warning message');
    }
    var unusable = undefined;
    var unusableA;
    function error(message) {
        throw new Error(message);
    }
    function fail() {
        return error('Something failed');
    }
    function infiniteLoop() {
        while (true) { }
    }
    function create(o) {
        console.log(o);
    }
    create({ prop: 0 });
    create(null);
    create([1, 2, 3]);
    var someValue = 'this is a string';
    var strLength = someValue.length;
    var someValueA = "this is a string";
    var strLengthA = someValueA.length;
})();
