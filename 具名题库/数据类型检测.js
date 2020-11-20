// 数据类型检测

// 数据类型检测：先回忆下数据类型吧
// String
const string = 'String'
// Number
const number = 19
// null
const isNull = null
// undefined
const isUndefined = undefined
// Boolean
const boolean = true
// Symbol
const symbol = Symbol('Symbol')
// Object
const array = [1, 2]
const object = {
    name: 'hy'
}
const regExp = /\s/
const func = function () {}

// 最简单的方法 typeof
console.log(typeof string); // string
console.log(typeof number); // number
console.log(typeof isNull) // object
console.log(typeof isUndefined) // undefined
console.log(typeof boolean) // boolean
console.log(typeof symbol) // symbol
console.log(typeof array) // object
console.log(typeof object) // object`
console.log(typeof regExp); // object
console.log(typeof func) // function

// 可以发现 null 跟 array、object、regExp 等引用类型值 使用 typeof 都无法进行类型区分

// instanceof 
console.log(string instanceof String); // false 无法检测
console.log(new String(string) instanceof String); // true  必须是String对象的实例才能检测
console.log(array instanceof Array); // true  可以分辨数组
console.log(regExp instanceof RegExp); // true 可以分辨正则
console.log(object instanceof Object); // true

// 可以看出 instanceof 也并不能完美的区分出各种数据类型


// Object.prototype.toString.call()
console.log(Object.prototype.toString.call(string)); // [object String]
console.log(Object.prototype.toString.call(number)); // [object Number]
console.log(Object.prototype.toString.call(isNull)); // [object Null]
console.log(Object.prototype.toString.call(isUndefined)); // [object Undefined]
console.log(Object.prototype.toString.call(boolean)); // [object Boolean]
console.log(Object.prototype.toString.call(symbol)) // [object Symbol]
console.log(Object.prototype.toString.call(array)) // [object Array]
console.log(Object.prototype.toString.call(object)) // [object Object]
console.log(Object.prototype.toString.call(regExp)) // [object RegExp]
console.log(Object.prototype.toString.call(func)) // [object Function]

// 也就是说只要我们封装个函数 就可以判断各种数据类型
const checkType = function checkType(param){
    return Object.prototype.toString.call(param).slice(8, -1).toLowerCase()
}
console.log(checkType(string)); // string
console.log(checkType(number)); // number
console.log(checkType(isNull)); // null
console.log(checkType(isUndefined)); // undefined
console.log(checkType(boolean)); // boolean
console.log(checkType(symbol)); // symbol
console.log(checkType(array)); // array
console.log(checkType(object)); // object
console.log(checkType(regExp)); // regexp
console.log(checkType(func)); // function
 
