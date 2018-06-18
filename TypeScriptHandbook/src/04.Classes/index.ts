/**************************** 使用类的例子 ****************************/
(function() {
    class Greeter {
        greeting: string;
        constructor(message: string) {
            this.greeting = message;
        }
        greet() {
            return 'Hello, ' + this.greeting;
        }
    }

    let greeter = new Greeter('world');
})();

/**************************** 继承 ****************************/
(function() {
    class Animal {
        num: number;
        move(distanceInMeters: number = 0) {
            this.num = distanceInMeters;
            console.log(`Animal moved ${this.num}m.`);
        }
    }

    class Dog extends Animal {
        bark() {
            console.log('Woof! Woof!');
        }
    }

    const dog = new Dog();
    dog.bark();
    dog.move(10);
    dog.bark();
})();

/**************************** 更为复杂的继承 ****************************/
(function() {
    console.log('-----------------------------');

    class Animal {
        name: string;
        constructor(theName: string) {
            this.name = theName;
        }
        move(distanceInMeters: number = 0) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }

    class Snake extends Animal {
        constructor(name: string) {
            super(name);
        }
        move(distanceInMeters = 5) {
            console.log('Slithering...');
            super.move(distanceInMeters);
        }
    }

    class Horse extends Animal {
        constructor(name: string) {
            super(name);
        }
        move(distanceInMeters = 45) {
            console.log('Galloping...');
            super.move(distanceInMeters);
        }
    }

    let sam = new Snake('Sammy the Python');
    let tom: Animal = new Horse('Tommy the Palomino');
    let ani = new Animal('Animal');
    sam.move();
    tom.move(34);
    ani.move(100);
})();

/**************************** 公共，私有与受保护的修饰符 ****************************/
(function() {
    console.log('-----------------------------');

    // 你也可以明确的将一个成员标记成public。 我们可以用下面的方式来重写上面的Animal类：
    class Animal {
        public name: string;
        public constructor(theName: string) {
            this.name = theName;
        }
        public move(distanceInMeters: number) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }
    // 理解private
    // 当成员被标记成private时，它就不能在声明它的类的外部访问。比如：
    // class Animal {
    //     private name: string;
    //     constructor(theName: string) { this.name = theName; }
    // }

    // new Animal("Cat").name; // 错误: 'name' 是私有的.
})();

/**************************** 理解private ****************************/
(function() {
    console.log('-----------------------------');

    // 理解private
    // 当成员被标记成private时，它就不能在声明它的类的外部访问。比如：
    // class Animal {
    //     private name: string;
    //     constructor(theName: string) { this.name = theName; }
    // }

    // new Animal("Cat").name; // 错误: 'name' 是私有的.

    class Animal {
        private name: string = 'aaa';
        constructor(theName: string) {
            this.name = theName;
        }
    }

    class Rhino extends Animal {
        constructor() {
            super('Rhino');
            // console.log(this.name); // error不能访问私有属性
        }
    }

    class Employee {
        private name: string;
        constructor(theName: string) {
            this.name = theName;
        }
    }

    let animal = new Animal('Goat');
    let rhino = new Rhino();
    let employee = new Employee('Bob');

    animal = rhino;
    console.log(animal === rhino);
    // console.log(Animal.name);

    // animal = employee; // 错误: Animal 与 Employee 不兼容.
})();

/**************************** 理解protected ****************************/
(function() {
    console.log('-----------------------------');

    // protected修饰符与private修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问。例如：

    class Person {
        protected name: string;
        constructor(name: string) {
            this.name = name;
        }
    }

    class Employee extends Person {
        private department: string;

        constructor(name: string, department: string) {
            super(name);
            this.department = department;
        }

        public getElevatorPitch() {
            return `Hello, my name is ${this.name} and I work in ${
                this.department
            }.`;
        }
    }

    let howard = new Employee('Howard', 'Sales');
    console.log(howard.getElevatorPitch());
    // console.log(howard.name); // 错误
    // 注意，我们不能在Person类外使用name，但是我们仍然可以通过Employee类的实例方法访问，因为Employee是由Person派生而来的。
})();

/**************************** 构造函数也可以被标记成protected ****************************/
(function() {
    console.log('-----------------------------');

    // 构造函数也可以被标记成protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。比如，

    class Person {
        protected name: string;
        protected constructor(theName: string) {
            // 构造函数也可以被标记成protected
            this.name = theName;
        }
    }

    // Employee 能够继承 Person
    class Employee extends Person {
        private department: string;

        constructor(name: string, department: string) {
            super(name);
            this.department = department;
        }

        public getElevatorPitch() {
            return `Hello, my name is ${this.name} and I work in ${
                this.department
            }.`;
        }
    }

    let howard = new Employee('Howard', 'Sales');
    // let john = new Person('John'); // 错误: 'Person' 的构造函数是被保护的.
})();

/**************************** readonly修饰符 ****************************/
(function() {
    console.log('-----------------------------');

    // 你可以使用readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
    class Octopus {
        readonly name: string;
        readonly numberOfLegs: number = 8;
        constructor(theName: string) {
            this.name = theName;
        }
    }
    let dad = new Octopus('Man with the 8 strong legs');
    // dad.name = 'Man with the 3-piece suit'; // 错误! name 是只读的.
})();

/**************************** 参数属性 ****************************/
(function() {
    console.log('-----------------------------');
    // 参数属性可以方便地让我们在一个地方定义并初始化一个成员。 下面的例子是对之前Animal类的修改版，使用了参数属性：
    class Animal {
        constructor(private name: string) {}
        move(distanceInMeters: number) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }
    // 注意看我们是如何舍弃了theName，仅在构造函数里使用private name: string参数来创建和初始化name成员。 我们把声明和赋值合并至一处。
    // 参数属性通过给构造函数参数添加一个访问限定符来声明。 使用private限定一个参数属性会声明并初始化一个私有成员；对于public和protected来说也是一样。
    let ani = new Animal('Atao');
    ani.move(1);
})();

/**************************** 存取器 ****************************/
(function() {
    console.log('-----------------------------');
    let passcode = 'secret passcode';

    class Employee {
        private _fullName: string;

        get fullName(): string {
            console.log('get');

            return this._fullName;
        }

        set fullName(newName: string) {
            console.log('set');
            if (passcode && passcode == 'secret passcode') {
                this._fullName = newName;
            } else {
                console.log('Error: Unauthorized update of employee!');
            }
        }
    }

    let employee = new Employee();
    employee.fullName = 'Bob Smith';
    if (employee.fullName) {
        console.log(employee.fullName);
    }
    console.log(employee);

    /**
     * 首先，存取器要求你将编译器设置为输出ECMAScript 5或更高。
     * 不支持降级到ECMAScript 3。
     * 其次，只带有get不带有set的存取器自动被推断为readonly。
     * 这在从代码生成.d.ts文件时是有帮助的，因为利用这个属性的用户会看到不允许够改变它的值。
     */
})();

/**************************** 静态属性 ****************************/
(function() {
    console.log('-----------------------------');
    class Grid {
        static origin = { x: 0, y: 0 };
        calculateDistanceFromOrigin(point: { x: number; y: number }) {
            let xDist = point.x - Grid.origin.x;
            let yDist = point.y - Grid.origin.y;
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        }
        constructor(public scale: number) {}
    }
    // Grid.origin.x = 111;
    let grid1 = new Grid(1.0); // 1x scale
    let grid2 = new Grid(5.0); // 5x scale

    console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
})();

/**************************** 抽象类 ****************************/
(function() {
    console.log('-----------------------------');
    // 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。
    abstract class Animal {
        abstract makeSound(): void;
        move(): void {
            console.log('roaming the earch...');
        }
    }

    // let ani = new Animal(); error，不能创建抽象类的实例

    class Test extends Animal {
        makeSound(): void {
            console.log('makeSound');
        }
    }

    let test = new Test();
    test.move();

    /**------------------------------------- */
    abstract class Department {
        constructor(public name: string) {}

        printName(): void {
            console.log('Department name: ' + this.name);
        }

        abstract printMeeting(): void; // 必须在派生类中实现
    }

    class AccountingDepartment extends Department {
        constructor() {
            super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
        }

        printMeeting(): void {
            console.log('The Accounting Department meets each Monday at 10am.');
        }

        generateReports(): void {
            console.log('Generating accounting reports...');
        }
    }

    let department: Department; // 允许创建一个对抽象类型的引用，注意这里的类型
    // department = new Department(); // 错误: 不能创建一个抽象类的实例
    department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
    department.printName();
    department.printMeeting();
    // department.generateReports(); // 错误: 方法在声明的抽象类中不存在
})();

/**************************** 构造函数 ****************************/
(function() {
    console.log('-----------------------------');
    class Greeter {
        greeting: string;
        constructor(message: string) {
            this.greeting = message;
        }
        greet() {
            return 'Hello, ' + this.greeting;
        }
    }

    let greeter: Greeter;
    greeter = new Greeter('world');
    console.log(greeter.greet());


    class Greeter1 {
        static standardGreeting = "Hello, there";
        greeting: string;
        greet() {
            if (this.greeting) {
                return "Hello, " + this.greeting;
            }
            else {
                return Greeter1.standardGreeting;
            }
        }
    }
    
    let greeter1: Greeter1;
    greeter1 = new Greeter1();
    console.log(greeter1.greet());
    
    let greeterMaker: typeof Greeter1 = Greeter1;
    greeterMaker.standardGreeting = "Hey there!";
    
    let greeter2: Greeter1 = new greeterMaker();
    console.log(greeter2.greet());

    console.log(greeter.greeting, greeter1.greeting, greeter2.greeting);
    
})();


/**************************** 把类当做接口使用 ****************************/
(function() {
    console.log('-----------------------------');
    // 如上一节里所讲的，类定义会创建两个东西：类的实例类型和一个构造函数。 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。
    class Point {
        x: number;
        y: number;
    }
    
    interface Point3d extends Point {
        z: number;
    }
    
    let point3d: Point3d = {x: 1, y: 2, z: 3};
    console.log(point3d);
    
    
})();
