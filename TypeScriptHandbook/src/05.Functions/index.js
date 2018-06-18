(function () {
    function add(x, y) {
        return x + y;
    }
    var myAdd = function (x, y) {
        return x + y;
    };
})();
(function () {
    var myAdd = function (x, y) {
        return x + y;
    };
    var myAdd1 = function (x, y) {
        return x + y;
    };
})();
(function () {
    var myAdd = function (x, y) {
        return x + y;
    };
    var myAdd1 = function (x, y) {
        return x + y;
    };
})();
(function () {
    function buildName(firstName, lastName) {
        if (lastName)
            return firstName + ' ' + lastName;
        else
            return firstName;
    }
    var result1 = buildName('Bob');
    var result3 = buildName('Bob', 'Adams');
    function buildName2(firstName, lastName) {
        if (lastName === void 0) { lastName = 'str'; }
        if (lastName)
            return firstName + ' ' + lastName;
        else
            return firstName;
    }
    var result2 = buildName2('Bob');
    function buildNameA(firstName, lastName) {
        if (firstName === void 0) { firstName = 'Will'; }
        return firstName + ' ' + lastName;
    }
    var resultC = buildNameA('Bob', 'Adams');
    var resultD = buildNameA(undefined, 'Adams');
})();
(function () {
    function buildNameA(firstName) {
        var restOfName = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfName[_i - 1] = arguments[_i];
        }
        return firstName + ' ' + restOfName.join(' ');
    }
    var employeeName = buildNameA('Joseph', 'Samuel', 'Lucas', 'MacKinzie');
    console.log(employeeName);
    function buildNameB(firstName) {
        var restOfName = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfName[_i - 1] = arguments[_i];
        }
        return firstName + ' ' + restOfName.join(' ');
    }
    var buildNameFun = buildNameB;
})();
(function () {
    console.log('-----------------------------------');
    var deck = {
        suits: ['hearts', 'spades', 'clubs', 'diamonds'],
        cards: Array(52),
        createCardPicker: function () {
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    var deck1 = {
        suits: ['hearts', 'spades', 'clubs', 'diamonds'],
        cards: Array(52),
        createCardPicker: function () {
            var _this = this;
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    var cardPicker1 = deck1.createCardPicker();
    var pickedCard1 = cardPicker1();
    console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit);
})();
(function () {
    console.log('-----------------------------------');
    var deck = {
        suits: ['hearts', 'spades', 'clubs', 'diamonds'],
        cards: Array(52),
        createCardPicker: function () {
            var _this = this;
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    var cardPicker = deck.createCardPicker();
    var pickedCard = cardPicker();
    console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit);
})();
(function () {
    console.log('-----------------------------------');
})();
(function () {
    console.log('-----------------------------------');
    var suits = ['hearts', 'spades', 'clubs', 'diamonds'];
    function pickCard(x) {
        if (typeof x == 'object') {
            var pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        else if (typeof x == 'number') {
            var pickedSuit = Math.floor(x / 13);
            return { suit: suits[pickedSuit], card: x % 13 };
        }
    }
    var myDeck = [
        { suit: 'diamonds', card: 2 },
        { suit: 'spades', card: 10 },
        { suit: 'hearts', card: 4 }
    ];
    var pickedCard1 = myDeck[pickCard(myDeck)];
    console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit);
    var pickedCard2 = pickCard(15);
    console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit);
})();
