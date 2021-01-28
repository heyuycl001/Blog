/*
! 需求: 创建人的对象, 需要对人的属性进行一定的约束

! id是number类型, 必须有, 只读的
! name是string类型, 必须有
! age是number类型, 必须有
! sex是string类型, 可以没有
*/
var person1 = {
    id: 10,
    name: 'zz',
    age: 18
};
var searchString = function (source, sub) {
    return source.search(sub) > -1;
};
var Person1 = /** @class */ (function () {
    function Person1() {
    }
    Person1.prototype.fiy = function () {
        console.log('我要飞');
    };
    return Person1;
}());
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    Person2.prototype.fiy = function () {
        console.log('我要飞');
    };
    Person2.prototype.lightOn = function () {
        console.log('开');
    };
    Person2.prototype.lightOff = function () {
        console.log('关');
    };
    return Person2;
}());
var person2 = new Person1();
var person3 = new Person2();
person2.fiy();
person3.fiy();
person3.lightOff();
person3.lightOn();
/* class Person3 implements LightableAlarm {
    // ! 类型“Person3”缺少类型“LightableAlarm”中的以下属性: fiy, lightOn, lightOff
} */ 
