(function() {
    /**************************** 变量声明 ****************************/
    function sumMatrix(matrix: number[][]) {
        var sum = 0;
        for (var i = 0; i < matrix.length; i++) {
            var currentRow = matrix[i];
            for (var i = 0; i < currentRow.length; i++) {
                sum += currentRow[i];
            }
        }

        return sum;
    }

    function sumMatrixA(matrix: number[][]) {
        let sum = 0;
        for (let i = 0; i < matrix.length; i++) {
            let currentRow = matrix[i];
            for (let i = 0; i < currentRow.length; i++) {
                sum += currentRow[i];
            }
        }

        return sum;
    }
    console.log('对比两个的问题，作用域');
    console.log(sumMatrix([[1, 2, 3], [4, 5, 6]]));
    console.log(sumMatrixA([[1, 2, 3], [4, 5, 6]]));

    // 并不是说块级作用域变量不能用函数作用域变量来声明。 而是块级作用域变量需要在明显不同的块里声明。
    function fA(condition, x) {
        if (condition) {
            let x = 100;
            return x;
        }

        return x;
    }

    fA(false, 0); // returns 0
    fA(true, 0); // returns 100

    /**************************** const ****************************/

    const numLivesForCat = 9;
    const kitty = {
        name: 'Aurora',
        numLives: numLivesForCat
    };

    // Error
    // kitty = {
    //     name: "Danielle",
    //     numLives: numLivesForCat
    // };

    // all "okay"
    kitty.name = 'Rory';
    kitty.name = 'Kitty';
    kitty.name = 'Cat';
    kitty.numLives--;

    /**************************** 解构数组 ****************************/

    let input = [1, 2];
    let [first, second] = input;
    console.log(first); // outputs 1
    console.log(second); // outputs 2
    [first, second] = [second, first];
    console.log(second); // outputs 1
    // 作用于函数参数：
    function f([first, second]: number[]) {
        console.log(first);
        console.log(second);
    }
    f(input);

    // 你可以在数组里使用...语法创建剩余变量：
    let [firstA, ...restA] = [1, 2, 3, 4];
    console.log(firstA); // outputs 1
    console.log(restA); // outputs [ 2, 3, 4 ]

    // 当然，由于是JavaScript, 你可以忽略你不关心的尾随元素：
    let [firstB] = [1, 2, 3, 4];
    console.log(firstB); // outputs 1
    // 或其它元素：
    let [, secondB, , fourthB] = [1, 2, 3, 4];

    /**************************** 对象解构 ****************************/
    // 你也可以解构对象：
    let o1 = {
        a1: "foo",
        b1: 12,
        c1: "bar"
    };
    let { a1, b1 } = o1;
    // 这通过 o.a and o.b 创建了 a 和 b 。 注意，如果你不需要 c 你可以忽略它。

    let { a3, b3 } = { a3: "baz", b3: 101 };

    // 你可以在对象里使用...语法创建剩余变量：
    let o2 = {
        a2: "foo",
        b2: 12,
        c2: "bar"
    };
    let { a2, ...passthrough } = o2;
    let total = passthrough.b2 + passthrough.c2.length;

    /**************************** 属性重命名 ****************************/
    // 你也可以给属性以不同的名字：
    let { a1: newName1, b1: newName2 } = o1;
    // 令人困惑的是，这里的冒号不是指示类型的。 如果你想指定它的类型， 仍然需要在其后写上完整的模式。
    let { a1: newName3, b1: newName4 }:{a1: string, b1: number} = o1;
    console.log(newName3, newName4);

    /**************************** 默认值 ****************************/
    function keepWholeObject(wholeObject: { a: string, b?: number }) {
        let { a, b = 1001 } = wholeObject;
    }
    keepWholeObject({a: 'str'});

    function keepWholeObject1( a?: string, b: number = 1001) {
        console.log('keepWholeObject1', b);
    }
    keepWholeObject1();

    /**************************** 函数声明 ****************************/
    type C = { a: string, b?: number }
    function fB({ a, b }: C): void {
        console.log(a);
    }
    fB({a:'str'});

    function fC({ a, b } : C = { a: "", b: 0  }): void {
        console.log('这也是设定初始值和类型', b);
    }
    fC(); 

    function fD({ a, b = 0 } = { a: "" }): void {
        // 注意看fD和fC的b赋值
        console.log(`a = ${a}, b = ${b}`);
        
    }
    fD({ a: "yes" }); // ok, default b = 0
    fD(); // ok, default to {a: ""}, which then defaults b = 0
    // fD({}); // error, 'a' is required if you supply an argument



})();

{
    /**************************** 展开 ****************************/
    // 展开数组
    let first = [1, 2];
    let second = [3, 4];
    let bothPlus = [0, ...first, ...second, 5];
    // 展开对象
    let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
    let search = { food: "rich", ...defaults }; // food会被覆盖

    // 对象展开还有其它一些意想不到的限制。 首先，它仅包含对象 自身的可枚举属性。 大体上是说当你展开一个对象实例时，你会丢失其方法：
    class C {
        p = 12;
        m() {
        }
    }
    let c = new C();
    let clone = { ...c };
    clone.p; // ok
    c.m(); // ok!
    // clone.m(); // error!

}
