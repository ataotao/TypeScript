var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var Greeter = (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return 'Hello, ' + this.greeting;
        };
        return Greeter;
    }());
    var greeter = new Greeter('world');
})();
(function () {
    var Animal = (function () {
        function Animal() {
        }
        Animal.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 0; }
            this.num = distanceInMeters;
            console.log("Animal moved " + this.num + "m.");
        };
        return Animal;
    }());
    var Dog = (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.bark = function () {
            console.log('Woof! Woof!');
        };
        return Dog;
    }(Animal));
    var dog = new Dog();
    dog.bark();
    dog.move(10);
    dog.bark();
})();
(function () {
    console.log('-----------------------------');
    var Animal = (function () {
        function Animal(theName) {
            this.name = theName;
        }
        Animal.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 0; }
            console.log(this.name + " moved " + distanceInMeters + "m.");
        };
        return Animal;
    }());
    var Snake = (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            return _super.call(this, name) || this;
        }
        Snake.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 5; }
            console.log('Slithering...');
            _super.prototype.move.call(this, distanceInMeters);
        };
        return Snake;
    }(Animal));
    var Horse = (function (_super) {
        __extends(Horse, _super);
        function Horse(name) {
            return _super.call(this, name) || this;
        }
        Horse.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 45; }
            console.log('Galloping...');
            _super.prototype.move.call(this, distanceInMeters);
        };
        return Horse;
    }(Animal));
    var sam = new Snake('Sammy the Python');
    var tom = new Horse('Tommy the Palomino');
    var ani = new Animal('Animal');
    sam.move();
    tom.move(34);
    ani.move(100);
})();
(function () {
    console.log('-----------------------------');
    var Animal = (function () {
        function Animal(theName) {
            this.name = theName;
        }
        Animal.prototype.move = function (distanceInMeters) {
            console.log(this.name + " moved " + distanceInMeters + "m.");
        };
        return Animal;
    }());
})();
(function () {
    console.log('-----------------------------');
    var Animal = (function () {
        function Animal(theName) {
            this.name = 'aaa';
            this.name = theName;
        }
        return Animal;
    }());
    var Rhino = (function (_super) {
        __extends(Rhino, _super);
        function Rhino() {
            return _super.call(this, 'Rhino') || this;
        }
        return Rhino;
    }(Animal));
    var Employee = (function () {
        function Employee(theName) {
            this.name = theName;
        }
        return Employee;
    }());
    var animal = new Animal('Goat');
    var rhino = new Rhino();
    var employee = new Employee('Bob');
    animal = rhino;
    console.log(animal === rhino);
})();
(function () {
    console.log('-----------------------------');
    var Person = (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var Employee = (function (_super) {
        __extends(Employee, _super);
        function Employee(name, department) {
            var _this = _super.call(this, name) || this;
            _this.department = department;
            return _this;
        }
        Employee.prototype.getElevatorPitch = function () {
            return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
        };
        return Employee;
    }(Person));
    var howard = new Employee('Howard', 'Sales');
    console.log(howard.getElevatorPitch());
})();
(function () {
    console.log('-----------------------------');
    var Person = (function () {
        function Person(theName) {
            this.name = theName;
        }
        return Person;
    }());
    var Employee = (function (_super) {
        __extends(Employee, _super);
        function Employee(name, department) {
            var _this = _super.call(this, name) || this;
            _this.department = department;
            return _this;
        }
        Employee.prototype.getElevatorPitch = function () {
            return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
        };
        return Employee;
    }(Person));
    var howard = new Employee('Howard', 'Sales');
})();
(function () {
    console.log('-----------------------------');
    var Octopus = (function () {
        function Octopus(theName) {
            this.numberOfLegs = 8;
            this.name = theName;
        }
        return Octopus;
    }());
    var dad = new Octopus('Man with the 8 strong legs');
})();
(function () {
    console.log('-----------------------------');
    var Animal = (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.move = function (distanceInMeters) {
            console.log(this.name + " moved " + distanceInMeters + "m.");
        };
        return Animal;
    }());
    var ani = new Animal('Atao');
    ani.move(1);
})();
(function () {
    console.log('-----------------------------');
    var passcode = 'secret passcode';
    var Employee = (function () {
        function Employee() {
        }
        Object.defineProperty(Employee.prototype, "fullName", {
            get: function () {
                console.log('get');
                return this._fullName;
            },
            set: function (newName) {
                console.log('set');
                if (passcode && passcode == 'secret passcode') {
                    this._fullName = newName;
                }
                else {
                    console.log('Error: Unauthorized update of employee!');
                }
            },
            enumerable: true,
            configurable: true
        });
        return Employee;
    }());
    var employee = new Employee();
    employee.fullName = 'Bob Smith';
    if (employee.fullName) {
        console.log(employee.fullName);
    }
    console.log(employee);
})();
(function () {
    console.log('-----------------------------');
    var Grid = (function () {
        function Grid(scale) {
            this.scale = scale;
        }
        Grid.prototype.calculateDistanceFromOrigin = function (point) {
            var xDist = point.x - Grid.origin.x;
            var yDist = point.y - Grid.origin.y;
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        };
        Grid.origin = { x: 0, y: 0 };
        return Grid;
    }());
    var grid1 = new Grid(1.0);
    var grid2 = new Grid(5.0);
    console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
})();
(function () {
    console.log('-----------------------------');
    var Animal = (function () {
        function Animal() {
        }
        Animal.prototype.move = function () {
            console.log('roaming the earch...');
        };
        return Animal;
    }());
    var Test = (function (_super) {
        __extends(Test, _super);
        function Test() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Test.prototype.makeSound = function () {
            console.log('makeSound');
        };
        return Test;
    }(Animal));
    var test = new Test();
    test.move();
    var Department = (function () {
        function Department(name) {
            this.name = name;
        }
        Department.prototype.printName = function () {
            console.log('Department name: ' + this.name);
        };
        return Department;
    }());
    var AccountingDepartment = (function (_super) {
        __extends(AccountingDepartment, _super);
        function AccountingDepartment() {
            return _super.call(this, 'Accounting and Auditing') || this;
        }
        AccountingDepartment.prototype.printMeeting = function () {
            console.log('The Accounting Department meets each Monday at 10am.');
        };
        AccountingDepartment.prototype.generateReports = function () {
            console.log('Generating accounting reports...');
        };
        return AccountingDepartment;
    }(Department));
    var department;
    department = new AccountingDepartment();
    department.printName();
    department.printMeeting();
})();
(function () {
    console.log('-----------------------------');
    var Greeter = (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return 'Hello, ' + this.greeting;
        };
        return Greeter;
    }());
    var greeter;
    greeter = new Greeter('world');
    console.log(greeter.greet());
    var Greeter1 = (function () {
        function Greeter1() {
        }
        Greeter1.prototype.greet = function () {
            if (this.greeting) {
                return "Hello, " + this.greeting;
            }
            else {
                return Greeter1.standardGreeting;
            }
        };
        Greeter1.standardGreeting = "Hello, there";
        return Greeter1;
    }());
    var greeter1;
    greeter1 = new Greeter1();
    console.log(greeter1.greet());
    var greeterMaker = Greeter1;
    greeterMaker.standardGreeting = "Hey there!";
    var greeter2 = new greeterMaker();
    console.log(greeter2.greet());
    console.log(greeter.greeting, greeter1.greeting, greeter2.greeting);
})();
(function () {
    console.log('-----------------------------');
    var Point = (function () {
        function Point() {
        }
        return Point;
    }());
    var point3d = { x: 1, y: 2, z: 3 };
    console.log(point3d);
})();
