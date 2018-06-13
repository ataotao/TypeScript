/**************************** 接口初探 ****************************/
(function() {
    interface LabelledValue {
        size?: number;
        label: string;
        // 值得提的是，类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以。
    }

    function printLabel(labelledObj: LabelledValue) {
        console.log(labelledObj.label);
    }

    let myObj = { size: 10, label: 'Size 10 Object' };
    printLabel(myObj);
})();

/**************************** 接口初探 ****************************/
(function() {
    interface SquareConfig {
        color?: string;
        width?: number;
    }

    function createSquare(
        config: SquareConfig = {}
    ): { color: string; area: number } {
        let newSquare = { color: 'white', area: 100 };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }

    let mySquare = createSquare({ color: 'black' });
    let mySquare1 = createSquare();
    console.log(mySquare);
    console.log(mySquare1);
})();

/**************************** 只读属性 ****************************/
(function() {
    interface Point {
        readonly x: number;
        readonly y: number;
    }

    let p1: Point = { x: 10, y: 20 };
    // p1.x = 5; // error!

    console.log(p1);

    // TypeScript具有ReadonlyArray < T > 类型，它与Array < T > 相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
    let a: number[] = [1, 2, 3, 4];
    let ro: ReadonlyArray<number> = a;
    a[0] = 12; // ok!
    // ro[0] = 12; // error!
    a.push(5); // ok!
    // ro.push(5); // error!
    // ro.length = 100; // error!

    // 就算把整个ReadonlyArray赋值到一个普通数组也是不可以的
    // a = ro; // error!
    // 但是你可以用类型断言重写：
    a = <number[]>ro;
    a = ro as number[];

    // readonly vs const
    // 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用const，若做为属性则使用readonly。
})();

(function() {
    // 如果SquareConfig带有上面定义的类型的color和width属性，并且还会带有任意数量的其它属性，那么我们可以这样定义它
    interface SquareConfig {
        color?: string;
        width?: number;
        [propName: string]: any;
    }

    function createSquare(config: SquareConfig) {
        console.log(config);
    }
    let mySquare = createSquare({ colour: 'red', width: 100 }); // 注意这里是colour不是color

    // 也可以用类型断言绕过检测
    interface SquareConfig1 {
        color?: string;
        width?: number;
    }
    function createSquare1(config: SquareConfig1) {
        console.log(config);
        return config;
    }
    // let mySquare1 = createSquare1({ colour: 100, opacity: 0.5 }); // error
    let mySquare1 = createSquare1({
        colour: 100,
        opacity: 0.5
    } as SquareConfig1);
    console.log(mySquare1);
})();

/**************************** 函数类型 ****************************/
(function() {
    interface SearchFunc {
        (source: string, subString: string): boolean;
    }

    let mySearch: SearchFunc;
    mySearch = function(source: string, subString: string) {
        let result = source.search(subString);
        console.log(result);
        return result > -1;
    };
    // mySearch('1111test', 'es');

    // 函数的参数名不需要与接口里定义的名字相匹配, 要求对应位置上的参数类型是兼容的
    let mySearch1: SearchFunc;
    mySearch1 = function(src: string, sub: string): boolean {
        let result = src.search(sub);
        return result > -1;
    };

    // 不想指定类型，TypeScript的类型系统会根据接口推断出参数类型
    let mySearch2: SearchFunc;
    mySearch2 = function(src, sub) {
        let result = src.search(sub);
        return result > -1;
    };
})();

/**************************** 可索引的类型 ****************************/
(function() {
    interface StringArray {
        [index: number]: string;
    }

    let myArray: StringArray;
    myArray = ['Bob', 'Fred'];

    let myStr: string = myArray[0];
    console.log(myStr);

    interface NumberDictionary {
        [index: string]: number;
        length: number; // 可以，length是number类型
        // name: string;       // 错误，`name`的类型与索引类型返回值的类型不匹配
    }
})();

/**************************** 索引签名设置为只读 ****************************/
(function() {
    interface ReadonlyStringArray {
        readonly [index: number]: string;
    }
    let myArray: ReadonlyStringArray = ['Alice', 'Bob'];
    console.log(myArray);
    // myArray[2] = "Mallory"; // error!
    // 你不能设置myArray[2]，因为索引签名是只读的。
})();

/******************************************************** 
 * 类类型 
 * ******************************************************** /

 /**************************** 实现接口 implements ****************************/

(function() {
    interface ClockInterface {
        currentTime: Date;
        setTime(d: Date): void;
    }

    class Clock implements ClockInterface {
        currentTime: Date;
        setTime(d: Date) {
            this.currentTime = d;
        }
        constructor(w: number, h: number) {}
    }
    let c = new Clock(800, 600);
    c.setTime(new Date());
    console.log(c);
})();

/**************************** 类静态部分与实例部分的区别 ****************************/

(function() {
    interface ClockConstructor {
        new (hour: number, minute: number): ClockInterface;
    }
    interface ClockInterface {
        tick();
    }

    function createClock(
        ctor: ClockConstructor,
        hour: number,
        minute: number
    ): ClockInterface {
        return new ctor(hour, minute);
    }

    class DigitalClock implements ClockInterface {
        constructor(h: number, m: number) {}
        tick() {
            console.log('beep beep');
        }
    }
    class AnalogClock implements ClockInterface {
        constructor(h: number, m: number) {}
        tick() {
            console.log('tick tock');
        }
    }

    let digital = createClock(DigitalClock, 12, 17);
    let analog = createClock(AnalogClock, 7, 32);
    digital.tick();
    analog.tick();
})();

/**************************** 继承接口 ****************************/

(function() {
    interface Shape {
        color: string;
    }

    interface Square extends Shape {
        sideLength: number;
    }

    // let square = {} as Square;
    // square.color = 'blue';
    // square.sideLength = 10;
    let square: Square = {color: 'red', sideLength: 1};
    console.log(square);

    // 一个接口可以继承多个接口，创建出多个接口的合成接口。
    interface Shape1 {
        color: string;
    }

    interface PenStroke1 {
        penWidth: number;
    }

    interface Square1 extends Shape1, PenStroke1 {
        sideLength: number;
    }

    let square1 = <Square1>{};
    square1.color = "blue";
    square1.sideLength = 10;
    square1.penWidth = 5.0;
    
})();


/**************************** 混合类型 ****************************/

(function() {

    // 一个对象可以同时做为函数和对象使用，并带有额外的属性
    interface Counter {
        (start: number): string;
        interval: number;
        reset(): void;
    }
    
    function getCounter(): Counter {
        let counter = <Counter>function (start: number) { };
        counter.interval = 123;
        counter.reset = function () { };
        return counter;
    }
    
    let c = getCounter();
    c(10);
    c.reset();
    c.interval = 5.0;
    
})();