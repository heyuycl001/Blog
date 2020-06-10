// Object.getPrototypeOf()

const prototype1 = {}

// create() 创建一个新对象，使用现有对象当作新对象的 __proto__
const object1 = Object.create(prototype1)

console.log(Object.getPrototypeOf(object1) === prototype1) // true

const reg = /a/
console.log(Object.getPrototypeOf(reg) === RegExp.prototype) // true

// Object.getPrototypeOf(Object) 不是 Object.prototype
console.log(Object.getPrototypeOf(Object) === Object.prototype) // false

// JavaScript中的 Object 是构造函(创建对象的包装器)
// 一般用法是
// const obj = new Object()
// 所以
Object.getPrototypeOf(Object) // ƒ () { [native code] }
Object.getPrototypeOf(Function) // ƒ () { [native code] }
console.log(Object.getPrototypeOf(Object) === Object.getPrototypeOf(Function)) // true

// Object.getPrototypeOf(Object || Function) 是把 Object || Function 这一构造函数看作对象。
// 因此返回的是函数对象的原型。也就是 Function.prototype
console.log(Object.getPrototypeOf(Object) === Function.prototype) // true
console.log(Object.getPrototypeOf(Function) === Function.prototype) // true

// 正确的方法是： Object.prototype是构造出来的对象的原型
const obj = new Object()
console.log(Object.getPrototypeOf(obj) === Object.prototype) // true
console.log(Object.getPrototypeOf({}) === Object.prototype) // true