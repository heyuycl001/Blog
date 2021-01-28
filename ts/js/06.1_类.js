var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.sayHi = function (sum) {
            if (sum === void 0) { sum = '5'; }
            console.log(this.name + sum);
        };
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name) {
            return _super.call(this, name) || this;
        }
        Dog.prototype.sayHi = function (sum) {
            if (sum === void 0) { sum = '10'; }
            console.log(this.name + sum);
        };
        return Dog;
    }(Animal));
    var Pig = /** @class */ (function (_super) {
        __extends(Pig, _super);
        function Pig(name) {
            return _super.call(this, name) || this;
        }
        Pig.prototype.sayHi = function (sum) {
            if (sum === void 0) { sum = '20'; }
            console.log(this.name + sum);
        };
        return Pig;
    }(Animal));
    var animal = new Animal('zz');
    var dog = new Dog('xx');
    var pig = new Pig('cc');
    animal.sayHi();
    dog.sayHi();
    pig.sayHi();
    var dog1 = new Dog('xx');
    var pig1 = new Pig('cc');
    dog1.sayHi();
    pig1.sayHi();
})();
