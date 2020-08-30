##### ES6模块与CommonJS

> CommonJS 模块输出的是一个值的拷贝，ES6模块输出的是值的引用
> CommonJS 模块是运行时加载的，ES6是编译时输出接口的

```js
CommonJS模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化不会影响到这个值

// common.js
var count = 1
var printCount = function () {
  return ++count
}

module.exports = {
  printCount,
  count
}

// index.js
let v = require('./common')

console.log(v.count) // 1
console.log(v.printCount()) // 2
console.log(v.count) // 1

明明common.js里面改变了count，但是输出的结果还是原来的。这是因为count是一个原始类型的值，会被缓存。除非写一个函数才能获取内部的值。
```

```js
// es6.js
let obj = {
  name: 'hy'
}
export let count = 1
export function printCount () {
  return ++count
}
export default obj

// index1.js // 需要编译
import {
  count,
  printCount
} from './es6'

console.log(count)  // 1
console.log(printCount()) // 2
console.log(count) // 2

// export default
let count = 1
function printCount () {
  return ++count
}

export default {
  count,
  printCount
}

import res from './es6'
console.log(res.count)  // 1
console.log(res.printCount()) // 2
console.log(res.count) // 1
```