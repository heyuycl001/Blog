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
var Person = /** @class */ (function () {
    // 定义构造函数：实例化对象的时候，将属性进行初始化
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    // 定义一般方法
    Person.prototype.sayHi = function (str) {
        console.log('zz' + str);
    };
    return Person;
}());
var person = new Person('hy', 18, 'xx');
person.sayHi('cc');
console.log(person.name, person.age, person.gender);
// 类的继承
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.run = function (distance) {
        console.log(distance + 'm');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.cry = function () {
        console.log('wang! wang!');
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.run(100);
dog.cry();
