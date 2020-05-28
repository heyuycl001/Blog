// JavaScript Demo: Object.fromEntries()

const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
])

const obj = Object.fromEntries(entries)

console.log(obj) // { foo: 'bar', baz: 42 }

// 初步观察不会影响原数据
console.log(entries) // Map { 'foo' => 'bar', 'baz' => 42 }


const arr = [
  ['foo', 'bar'],
  ['baz', 42]
]
const obj1 = Object.fromEntries(arr)

console.log(obj1) // { foo: 'bar', baz: 42 }

console.log(arr) // [ [ 'foo', 'bar' ], [ 'baz', 42 ] ]

// MDN: 把键值对列表转换为一个对象
// Object.fromEntries(iterable);
// - iterable
// 可迭代对象，类似Array、Map或者其他实现了可迭代协议的对象 // 目前所有的内置可迭代对象如下：String、Array、TypedArray、Map 和 Set，
// 可迭代对象文档 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols
// - 返回值
// 一个新对象

// Object.fromEntries() 是 Object.entries 的反转。

// 尝试一个对象
const obj2 = {
  a: 2,
  b: 3,
  c: 4
};

// const obj3 = Object.fromEntries(obj2)

// console.log(obj3)  //  object is not iterable (cannot read property Symbol(Symbol.iterator)) // 对象不可迭代

// 来尝试另外一种有意思的思路
const obj4 = Object.fromEntries(Object.entries(obj2))
console.log(obj4) // { a: 1, b: 2, c: 3 }

// 把对象的每一项都*2
const obj5 = Object.entries(obj2).map(([key, val]) => [key, val * 2])
console.log(obj5) // [ [ 'a', 4 ], [ 'b', 6 ], [ 'c', 8 ] ]


// 来自定义一个可迭代对象

var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
console.log([...myIterable]) // [1, 2, 3]