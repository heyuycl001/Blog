/**
 * [].concat()
 * 用于合并两个或多个数组。此方法不会更改现有数组，而是返回另一个数组。
 * 数组浅拷贝
 */

/**
 * demo
 */
const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']

console.log(array1.concat(array2)) // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// 也可用来返回一个新数组
console.log([].concat(array1) === array1) // false


const array3 = [{ name: 1 }, { name: 2 }]
const array4 = [{ name: 3 }, { name: 4 }]
const result = array3.concat(array4)
console.log(result) // [ { name: 1 }, { name: 2 }, { name: 3 }, { name: 4 } ]
result[3].name = 'hy'
console.log(result) // [ { name: 1 }, { name: 2 }, { name: 3 }, { name: 'hy' } ]
console.log(array4) // [ { name: 3 }, { name: 'hy' } ]