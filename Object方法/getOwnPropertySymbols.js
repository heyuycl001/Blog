// getOwnpropertySymbols

const obj = {}

console.log(Object.getOwnPropertySymbols(obj)) // []
// 所有的对象在初始化的时候不会包含任何的 Symbol，除非你在对象上赋值了 Symbol 否则Object.getOwnPropertySymbols()只会返回一个空的数组。


const obj1 = {}
const a = Symbol('a')
const b = Symbol.for('b')
obj1[a] = 'hhhhhhh'
obj1[b] = 'yyyyyyy'

console.log(obj1) // { [Symbol(a)]: 'hhhhhhh', [Symbol(b)]: 'yyyyyyy' }

console.log(Object.getOwnPropertyNames(obj1)) // []
//getOwnPropertyNames、keys 不会返回Symbol属性

console.log(Object.getOwnPropertySymbols(obj1)) // [ Symbol(a), Symbol(b) ]