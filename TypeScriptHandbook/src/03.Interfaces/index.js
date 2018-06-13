(function () {
    function printLabel(labelledObj) {
        console.log(labelledObj.label);
    }
    var myObj = { size: 10, label: 'Size 10 Object' };
    printLabel(myObj);
})();
(function () {
    function createSquare(config) {
        if (config === void 0) { config = {}; }
        var newSquare = { color: 'white', area: 100 };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }
    var mySquare = createSquare({ color: 'black' });
    var mySquare1 = createSquare();
    console.log(mySquare);
    console.log(mySquare1);
})();
(function () {
    var p1 = { x: 10, y: 20 };
    console.log(p1);
    var a = [1, 2, 3, 4];
    var ro = a;
    a[0] = 12;
    a.push(5);
    a = ro;
    a = ro;
})();
(function () {
    function createSquare(config) {
        console.log(config);
    }
    var mySquare = createSquare({ colour: 'red', width: 100 });
    function createSquare1(config) {
        console.log(config);
        return config;
    }
    var mySquare1 = createSquare1({
        colour: 100,
        opacity: 0.5
    });
    console.log(mySquare1);
})();
(function () {
    var mySearch;
    mySearch = function (source, subString) {
        var result = source.search(subString);
        console.log(result);
        return result > -1;
    };
    var mySearch1;
    mySearch1 = function (src, sub) {
        var result = src.search(sub);
        return result > -1;
    };
    var mySearch2;
    mySearch2 = function (src, sub) {
        var result = src.search(sub);
        return result > -1;
    };
})();
(function () {
    var myArray;
    myArray = ['Bob', 'Fred'];
    var myStr = myArray[0];
    console.log(myStr);
})();
(function () {
    var myArray = ['Alice', 'Bob'];
    console.log(myArray);
})();
(function () {
    var Clock = (function () {
        function Clock(w, h) {
        }
        Clock.prototype.setTime = function (d) {
            this.currentTime = d;
        };
        return Clock;
    }());
    var c = new Clock(800, 600);
    c.setTime(new Date());
    console.log(c);
})();
(function () {
    function createClock(ctor, hour, minute) {
        return new ctor(hour, minute);
    }
    var DigitalClock = (function () {
        function DigitalClock(h, m) {
        }
        DigitalClock.prototype.tick = function () {
            console.log('beep beep');
        };
        return DigitalClock;
    }());
    var AnalogClock = (function () {
        function AnalogClock(h, m) {
        }
        AnalogClock.prototype.tick = function () {
            console.log('tick tock');
        };
        return AnalogClock;
    }());
    var digital = createClock(DigitalClock, 12, 17);
    var analog = createClock(AnalogClock, 7, 32);
    digital.tick();
    analog.tick();
})();
(function () {
    var square = { color: 'red', sideLength: 1 };
    console.log(square);
    var square1 = {};
    square1.color = "blue";
    square1.sideLength = 10;
    square1.penWidth = 5.0;
})();
(function () {
    function getCounter() {
        var counter = function (start) { };
        counter.interval = 123;
        counter.reset = function () { };
        return counter;
    }
    var c = getCounter();
    c(10);
    c.reset();
    c.interval = 5.0;
})();
