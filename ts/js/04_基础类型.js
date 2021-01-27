var isBoolean = false;
isBoolean = true;
console.log(isBoolean);
var isNumber = 10;
isNumber = 20;
console.log(isNumber);
var isString = 'zz';
isString = 'xx';
console.log(isString);
// ! 默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。
var isUndefined = undefined;
var isUnll = null;
console.log(isUndefined, isUnll);
// 数组
var isArray = [1, 2, 3];
var isArray1 = ['1', '2', '3'];
var isArray2 = [1, 2, 3];
var isArray3 = ['1', '2', '3'];
// 元组 Tuple
var isTuple = [1, '2'];
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor, Color.Red, Color.Blue);
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
console.log(Color1.Red, Color1.Green, Color1.Blue);
var myColor1 = Color1[2];
console.log(myColor1);
// any
var notSure = 1;
notSure = '1';
notSure = true;
console.log(notSure);
var list = [1, '2', true];
console.log(list);
// void
// ! 当函数没有返回值，你通常会见到其返回值类型是void
function fn() {
    console.log('fn()');
}
// ! 声明一个 void 类型的变量没什么用，因为他只能赋值 undefined | null
var isVoid = undefined;
// object
function fn2(obj) {
    return {};
}
fn2(String);
// 联合类型
function fn3(x) {
    return x.toString();
}
// 类型断言
/*
类型断言(Type Assertion): 可以用来手动指定一个值的类型
语法:
    方式一: <类型>值
    方式二: 值 as 类型  tsx中只能用这种方式
*/
function fn4(x) {
    if (x.length) {
        return x.length;
    }
    else {
        return x.toString().length;
    }
}
console.log(fn4('abcd'), fn4(1234));
// 类型推断
// 1. 定义变量时赋值了, 推断为对应的类型.
var b9 = 10; // ! 不能将类型“string”分配给类型“number”
// b9 = '10' 
// 2. 定义变量时没有赋值, 推断为any类型
var b10; // ! 变量 "b10" 隐式具有 "any" 类型，但可以从用法中推断出更好的类型。
b10 = 10;
b10 = '10';
