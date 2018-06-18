/**************************** 函数类型 ****************************/
(function() {
    function add(x: number, y: number): number {
        return x + y;
    }

    let myAdd = function(x: number, y: number): number {
        return x + y;
    };
    // 我们可以给每个参数添加类型之后再为函数本身添加返回值类型。 TypeScript能够根据返回语句自动推断出返回值类型，因此我们通常省略它。
})();

/**************************** 书写完整函数类型 ****************************/
(function() {
    let myAdd: (x: number, y: number) => number = function(
        x: number,
        y: number
    ): number {
        return x + y;
    };
    // 函数类型包含两部分：参数类型和返回值类型。 当写出完整函数类型的时候，这两部分都是需要的。 我们以参数列表的形式写出参数类型，为每个参数指定一个名字和类型。
    // 这个名字只是为了增加可读性。 我们也可以这么写：
    let myAdd1: (baseValue: number, increment: number) => number = function(
        x: number,
        y: number
    ): number {
        return x + y;
    };
    // 只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确。
    // 第二部分是返回值类型。 对于返回值，我们在函数和返回值类型之前使用(=>)符号，使之清晰明了。 如之前提到的，返回值类型是函数类型的必要部分，如果函数没有返回任何值，你也必须指定返回值类型为void而不能留空。
    // 函数的类型只是由参数类型和返回值组成的。 函数中使用的捕获变量不会体现在类型里。 实际上，这些变量是函数的隐藏状态并不是组成API的一部分。
})();

/**************************** 推断类型 ****************************/
(function() {
    // 尝试这个例子的时候，你会发现如果你在赋值语句的一边指定了类型但是另一边没有类型的话，TypeScript编译器会自动识别出类型：
    // myAdd has the full function type
    let myAdd = function(x: number, y: number): number {
        return x + y;
    };

    // The parameters `x` and `y` have the type number
    let myAdd1: (baseValue: number, increment: number) => number = function(
        x,
        y
    ) {
        return x + y;
    };
    // 这叫做“按上下文归类”，是类型推论的一种。 它帮助我们更好地为程序指定类型。
})();

/**************************** 可选参数和默认参数 ****************************/
(function() {
    function buildName(firstName: string, lastName?: string) {
        if (lastName) return firstName + ' ' + lastName;
        else return firstName;
    }

    let result1 = buildName('Bob'); // works correctly now
    // let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
    let result3 = buildName('Bob', 'Adams'); // ah, just right

    // 在所有必须参数后面的带默认初始化的参数都是可选的，与可选参数一样，在调用函数的时候可以省略。 也就是说可选参数与末尾的默认参数共享参数类型。
    // function buildName(firstName: string, lastName?: string) {
    //     // ...
    // }
    // 和

    // function buildName(firstName: string, lastName = "Smith") {
    //     // ...
    // }
    function buildName2(firstName: string, lastName = 'str') {
        if (lastName) return firstName + ' ' + lastName;
        else return firstName;
    }
    let result2 = buildName2('Bob');

    // 与普通可选参数不同的是，带默认值的参数不需要放在必须参数的后面。
    // 如果带默认值的参数出现在必须参数前面，用户必须明确的传入undefined值来获得默认值。 例如，我们重写最后一个例子，让firstName是带默认值的参数：
    function buildNameA(firstName = 'Will', lastName: string) {
        return firstName + ' ' + lastName;
    }

    // let resultA = buildNameA("Bob");                  // error, too few parameters
    // let resultB = buildNameA("Bob", "Adams", "Sr.");  // error, too many parameters
    let resultC = buildNameA('Bob', 'Adams'); // okay and returns "Bob Adams"
    let resultD = buildNameA(undefined, 'Adams'); // okay and returns "Will Adams"

    // function buildNameB(firstName?: string, lastName: string) {  // [ts] 必选参数不能位于可选参数后。
    //     return firstName + " " + lastName;
    // }
})();

/**************************** 剩余参数 ****************************/
(function() {
    // 在TypeScript里，你可以把所有参数收集到一个变量里：
    function buildNameA(firstName: string, ...restOfName: string[]) {
        return firstName + ' ' + restOfName.join(' ');
    }

    let employeeName = buildNameA('Joseph', 'Samuel', 'Lucas', 'MacKinzie');
    console.log(employeeName);

    // 剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。 编译器创建参数数组，名字是你在省略号（...）后面给定的名字，你可以在函数体内使用这个数组。
    // 这个省略号也会在带有剩余参数的函数类型定义上使用到：
    function buildNameB(firstName: string, ...restOfName: string[]) {
        return firstName + ' ' + restOfName.join(' ');
    }

    let buildNameFun: (fname: string, ...rest: string[]) => string = buildNameB;
})();

/**************************** this和箭头函数 ****************************/
(function() {
    console.log('-----------------------------------');
    // 例子
    let deck = {
        suits: ['hearts', 'spades', 'clubs', 'diamonds'],
        cards: Array(52),
        createCardPicker: function() {
            return function() {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);

                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };

    // let cardPicker = deck.createCardPicker();
    // let pickedCard = cardPicker();
    // console.log("card: " + pickedCard.card + " of " + pickedCard.suit); error
    let deck1 = {
        suits: ['hearts', 'spades', 'clubs', 'diamonds'],
        cards: Array(52),
        createCardPicker: function() {
            // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
            return () => {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);

                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };

    let cardPicker1 = deck1.createCardPicker();
    let pickedCard1 = cardPicker1();

    console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit);
})();

/**************************** this参数 ****************************/
(function() {
    console.log('-----------------------------------');
    // 不幸的是，this.suits[pickedSuit]的类型依旧为any。 这是因为this来自对象字面量里的函数表达式。 修改的方法是，提供一个显式的this参数。 this参数是个假的参数，它出现在参数列表的最前面：

    interface Card {
        suit: string;
        card: number;
    }
    interface Deck {
        suits: string[];
        cards: number[];
        createCardPicker(this: Deck): () => Card;
    }

    let deck: Deck = {
        suits: ['hearts', 'spades', 'clubs', 'diamonds'],
        cards: Array(52),
        // NOTE: The function now explicitly specifies that its callee must be of type Deck
        createCardPicker: function(this: Deck) {
            return () => {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);

                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };

    let cardPicker = deck.createCardPicker();
    let pickedCard = cardPicker();

    console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit);
    // 现在TypeScript知道createCardPicker期望在某个Deck对象上调用。 也就是说this是Deck类型的，而非any，因此--noImplicitThis不会报错了。
})();

/**************************** 回调函数里的this参数 ****************************/
(function() {
    console.log('-----------------------------------');
    /**
    当你将一个函数传递到某个库函数里在稍后被调用时，你可能也见到过回调函数里的this会报错。 因为当回调函数被调用时，它会被当成一个普通函数调用，this将为undefined。 稍做改动，你就可以通过this参数来避免错误。 首先，库函数的作者要指定this的类型：
    interface UIElement {
        addClickListener(onclick: (this: void, e: Event) => void): void;
    }
    this: void意味着addClickListener期望onclick是一个函数且它不需要一个this类型。 然后，为调用代码里的this添加类型注解：
    class Handler {
        info: string;
        onClickBad(this: Handler, e: Event) {
            // oops, used this here. using this callback would crash at runtime
            this.info = e.message;
        }
    }
    let h = new Handler();
    uiElement.addClickListener(h.onClickBad); // error!
    指定了this类型后，你显式声明onClickBad必须在Handler的实例上调用。 然后TypeScript会检测到addClickListener要求函数带有this: void。 改变this类型来修复这个错误：
    class Handler {
        info: string;
        onClickGood(this: void, e: Event) {
            // can't use this here because it's of type void!
            console.log('clicked!');
        }
    }
    let h = new Handler();
    uiElement.addClickListener(h.onClickGood);
    因为onClickGood指定了this类型为void，因此传递addClickListener是合法的。 当然了，这也意味着不能使用this.info. 如果你两者都想要，你不得不使用箭头函数了：
    class Handler {
        info: string;
        onClickGood = (e: Event) => { this.info = e.message }
    }
    这是可行的因为箭头函数不会捕获this，所以你总是可以把它们传给期望this: void的函数。 缺点是每个Handler对象都会创建一个箭头函数。 另一方面，方法只会被创建一次，添加到Handler的原型链上。 它们在不同Handler对象间是共享的。
     */
})();

/**************************** 重载 ****************************/
(function() {
    console.log('-----------------------------------');
    let suits = ['hearts', 'spades', 'clubs', 'diamonds'];

    function pickCard(x: { suit: string; card: number }[]): number;
    function pickCard(x: number): { suit: string; card: number };

    // 注意，function pickCard(x): any并不是重载列表的一部分，因此这里只有两个重载：一个是接收对象另一个接收数字。 以其它参数调用pickCard会产生错误。
    function pickCard(x): any {
        // Check to see if we're working with an object/array
        // if so, they gave us the deck and we'll pick the card
        if (typeof x == 'object') {
            let pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        // Otherwise just let them pick the card
        else if (typeof x == 'number') {
            let pickedSuit = Math.floor(x / 13);
            return { suit: suits[pickedSuit], card: x % 13 };
        }
    }

    let myDeck = [
        { suit: 'diamonds', card: 2 },
        { suit: 'spades', card: 10 },
        { suit: 'hearts', card: 4 }
    ];
    
    let pickedCard1 = myDeck[pickCard(myDeck)];
    console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit);

    let pickedCard2 = pickCard(15);
    console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit);
})();
