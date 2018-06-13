(function() {
    /**************************** 布尔值 ****************************/
    let isDone: boolean = false;

    /**************************** 数字 ****************************/
    let decLiteral: number = 6;
    let hexLiteral: number = 0xf00d;
    let binaryLiteral: number = 0b1010;
    let octalLiteral: number = 0o744;

    /**************************** 字符串 ****************************/
    let name: string = 'bob';
    name = 'smith';

    let nameA: string = `Gene`;
    nameA = `Atao`;
    let ageA: number = 37;
    let sentenceA: string = `Hello, my name is ${nameA}.
    
    I'll be ${ageA + 1} years old next month.`;

    console.log(sentenceA);

    /**************************** 数组 ****************************/
    let list: number[] = [1, 2, 3];
    let listA: Array<number> = [1, 2, 3];

    /**************************** 元组 Tuple ****************************/
    let x: [string, number];
    x = ['hello', 10]; // OK
    // x = [10, 'hello']; // Error
    console.log(x[0].substr(1)); // OK ello
    // console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
    // 当访问一个越界的元素，会使用联合类型替代：
    x[2] = 'world'; // OK, 字符串可以赋值给(string | number)类型
    console.log(x[2].toString()); // OK, 'string' 和 'number' 都有 toString
    console.log(x);
    // x[6] = true; // Error, 布尔不是(string | number)类型

    /**************************** 枚举 ****************************/
    enum Color {
        Red,
        Green,
        Blue
    }
    let c: Color = Color.Green;
    console.log(Color);

    enum ColorA {
        Red = 3,
        Green,
        Blue
    }
    let cA: ColorA = ColorA.Green;
    console.log(ColorA);

    enum ColorB {
        Red = 1,
        Green = 2,
        Blue = 4
    }
    let cB: ColorB = ColorB.Green;
    let colorNameB: string = ColorB[2]; // Green
    console.log(colorNameB);

    /**************************** 任意值 ****************************/
    let notSure: any = 4;
    notSure = 'maybe a string instead';
    notSure = false; // okay, definitely a boolean

    let notSureA: any = 4;
    // notSure.ifItExists(); // okay, ifItExists might exist at runtime
    // notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

    /**************************** 空值 ****************************/
    function warnUser(): void {
        alert('This is my warning message');
    }
    let unusable: void = undefined;
    let unusableA: void;
    // unusableA = 1; // error
    // 当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 这能避免很多常见的问题。
    // 也许在某处你想传入一个string或null或undefined，你可以使用联合类型string | null | undefined。 再次说明，稍后我们会介绍联合类型。

    /**************************** Never ****************************/

    // 返回never的函数必须存在无法达到的终点
    function error(message: string): never {
        throw new Error(message);
    }

    // 推断的返回值类型为never
    function fail() {
        return error('Something failed');
    }

    // 返回never的函数必须存在无法达到的终点
    function infiniteLoop(): never {
        while (true) {}
    }

    /**************************** Object ****************************/
    function create(o: object | null): void {
        console.log(o);
    }

    create({ prop: 0 }); // OK
    create(null); // OK
    create([1, 2, 3]); // OK

    // create(42); // Error
    // create("string"); // Error
    // create(false); // Error
    // create(undefined); // Error

    /**************************** 类型断言 ****************************/
    // 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。
    // 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。

    // 类型断言有两种形式。 其一是“尖括号”语法：
    let someValue: any = 'this is a string';
    let strLength: number = (<string>someValue).length;

    // 另一个为as语法： 在TypeScript里使用JSX时，只有as语法断言是被允许的。
    let someValueA: any = "this is a string";
    let strLengthA: number = (someValueA as string).length;
    
})();
