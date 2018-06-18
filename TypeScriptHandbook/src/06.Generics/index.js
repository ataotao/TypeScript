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
    function identityA(arg) {
        return arg;
    }
    function identity(arg) {
        return arg;
    }
    function loggingIdentityA(arg) {
        console.log(arg.length);
        return arg;
    }
    function loggingIdentityB(arg) {
        console.log(arg.length);
        return arg;
    }
})();
(function () {
    console.log('-------------------------------------');
    function identity(arg, b) {
        return arg.concat(b);
    }
    var myIdentity = identity;
    console.log(myIdentity([1, 2, 3,], [4, 5, 6]));
    function identityA(arg) {
        return arg;
    }
    var myIdentityA = identityA;
    function identityB(arg) {
        return arg;
    }
    var myIdentityB = identityB;
    function identityC(arg) {
        return arg;
    }
    var myIdentityC = identityC;
    myIdentityC('str');
    function identityD(arg) {
        return arg;
    }
    var myIdentityD = identityD;
    myIdentityD(1);
})();
(function () {
    console.log('-------------------------------------');
    function loggingIdentity(arg) {
        console.log(arg.length);
        return arg;
    }
    loggingIdentity({ length: 10, value: 3 });
})();
(function () {
    console.log('-------------------------------------');
    function create(c) {
        return new c();
    }
    var BeeKeeper = (function () {
        function BeeKeeper() {
        }
        return BeeKeeper;
    }());
    var ZooKeeper = (function () {
        function ZooKeeper() {
        }
        return ZooKeeper;
    }());
    var Animal = (function () {
        function Animal() {
        }
        return Animal;
    }());
    var Bee = (function (_super) {
        __extends(Bee, _super);
        function Bee() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Bee;
    }(Animal));
    var Lion = (function (_super) {
        __extends(Lion, _super);
        function Lion() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Lion;
    }(Animal));
    function createInstance(c) {
        return new c();
    }
    createInstance(Lion).keeper.nametag;
    createInstance(Bee).keeper.hasMask;
})();
