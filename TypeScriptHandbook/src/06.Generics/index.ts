/**************************** 使用泛型变量 ****************************/
(function() {

    function identityA(arg: String[]): String[] {
        return arg;
    }

    function identity<T>(arg: T): T {
        return arg;
    }

    // function loggingIdentity<T>(arg: T): T {
    //     console.log(arg.length);  // Error: T doesn't have .length
    //     return arg;
    // }

    function loggingIdentityA<T>(arg: T[]): T[] {
        console.log(arg.length);  // Array has a .length, so no more error
        return arg;
    }

    // 我们也可以这样实现上面的例子：
    function loggingIdentityB<T>(arg: Array<T>): Array<T> {
        console.log(arg.length);  // Array has a .length, so no more error
        return arg;
    }
})();

/**************************** 泛型类型 ****************************/
(function() {

    console.log('-------------------------------------');
    // 泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样：

    // function identity<T>(arg: T): T {
    //     return arg;
    // }
    
    // let myIdentity: <T>(arg: T) => T = identity;

    function identity<T>(arg: T[], b: T[]): T[] {
        return arg.concat(b);
    }
    let myIdentity: <T>(arg: T[], b: T[]) => T[] = identity;
    console.log(myIdentity([1,2,3,], [4,5,6]));

    // 我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。
    function identityA<T>(arg: T): T {
        return arg;
    }
    let myIdentityA: <U>(arg: U) => U = identityA;

    // 我们还可以使用带有调用签名的对象字面量来定义泛型函数：
    function identityB<T>(arg: T): T {
        return arg;
    }
    let myIdentityB: {<T>(arg: T): T} = identityB;

    // 这引导我们去写第一个泛型接口了。 我们把上面例子里的对象字面量拿出来做为一个接口：
    interface GenericIdentityFn {
        <T>(arg: T): T;
    }

    function identityC<T>(arg: T): T {
        return arg;
    }

    let myIdentityC: GenericIdentityFn = identityC;
    myIdentityC('str');

    // 一个相似的例子，我们可能想把泛型参数当作整个接口的一个参数。 这样我们就能清楚的知道使用的具体是哪个泛型类型（比如：Dictionary<string>而不只是Dictionary）。 这样接口里的其它成员也能知道这个参数的类型了。
    interface GenericIdentityFnD<T> {
        (arg: T): T;
    }
    
    function identityD<T>(arg: T): T {
        return arg;
    }
    
    let myIdentityD: GenericIdentityFnD<number> = identityD;
    myIdentityD(1);

})();

/**************************** 泛型约束 ****************************/
(function() {

    console.log('-------------------------------------');
    // function loggingIdentity<T>(arg: T): T {
    //     console.log(arg.length);  // Error: T doesn't have .length
    //     return arg;
    // }
    // 我们定义一个接口来描述约束条件。 创建一个包含.length属性的接口，使用这个接口和extends关键字来实现约束：
    interface Lengthwise {
        length: number;
    }
    
    function loggingIdentity<T extends Lengthwise>(arg: T): T {
        console.log(arg.length);  // Now we know it has a .length property, so no more error
        return arg;
    }

    // loggingIdentity(3);  // Error, number doesn't have a .length property
    loggingIdentity({length: 10, value: 3});

})();


/**************************** 在泛型约束中使用类型参数 ****************************/
(function() {

    console.log('-------------------------------------');
    // 在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型。比如，
    function create<T>(c: {new(): T; }): T {
        return new c();
    }
    // 一个更高级的例子，使用原型属性推断并约束构造函数与类实例的关系。
    class BeeKeeper {
        hasMask: boolean;
    }
    
    class ZooKeeper {
        nametag: string;
    }
    
    class Animal {
        numLegs: number;
    }
    
    class Bee extends Animal {
        keeper: BeeKeeper;
    }
    
    class Lion extends Animal {
        keeper: ZooKeeper;
    }
    
    function createInstance<A extends Animal>(c: new () => A): A {
        return new c();
    }
    
    createInstance(Lion).keeper.nametag;  // typechecks!
    createInstance(Bee).keeper.hasMask;   // typechecks!

})();