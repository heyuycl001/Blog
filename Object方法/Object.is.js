// Object.is()

Object.is('h', 'h') // true
Object.is(window, window) //true

Object.is('h', 'y') // false
Object.is([], []) // false

const foo = {
  a: 1
}
const bar = {
  a: 1
}
Object.is(foo, foo) // true
Object.is(foo, bar) // false

Object.is(null, null) // true

// 特殊
Object.is(0, -0) // false
Object.is(0, +0) // true
Object.is(-0, -0) // true
Object.is(NaN, 0 / 0) // true
Object.is(NaN, NaN) // true


// Object.is() 判断两个值是否相同。如果下列任何一项成立，则两个值相同：
// 1.两个值都是 undefined
// 2.两个值都是 null
// 3.两个值都是 true 或者都是 false
// 4.两个值是由相同个数的字符按照相同的顺序组成的字符串
// 5.两个值指向同一个对象
// 6.两个值都是数字并且
      // 1.都是正零 +0
      // 2.都是负零 -0
      // 3.都是 NaN
      // 4.都是除零和 NaN 外的其它同一个数字

// 这种相等性判断逻辑和传统的 == 运算不同，== 运算符会对它两边的操作数做隐式类型转换
//（如果它们类型不同），然后才进行相等性比较，（所以才会有类似 "" == false 等于 true 的现象），但 Object.is 不会做这种类型转换。

// 这与 === 运算符的判定方式也不一样。=== 运算符（和== 运算符）将数字值 -0 和 +0 视为相等，并认为 Number.NaN 不等于 NaN。