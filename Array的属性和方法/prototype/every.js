/**
 * [].every()
 * 测试一个数组内的所有元素是否都能通过某个指定函数的测试。
 * 它返回一个布尔值
 */

/**
 * demo
 * 参数
 *   - callback
 *     用来测试每个元素的函数，它可以接收三个参数。
 *       - element
 *         用于测试的它的当前值。
 *       - index
 *         用于测试的当前值的索引。
 *       - array
 *         调用every的当前数组
 *   - thisArg
 *     执行callback时使用的this的值。
 */
// 判断数组里的每一项的类型是否是number
function isNumber (e, index, arr) {
  console.log(e) // 数组的每一项
  console.log(index) // 每一项的索引
  console.log(arr) // 数组
  return typeof e === 'number'
}
const array = [2, 53, 653, 234, 13, 34, 64, 234, 654]
console.log(array.every(isNumber)) // true

const obj = {
  a: 1
}
const array1 = [2, 53, 653, 234, 13, 34, '64', 234, 654]
console.log(array1.every(isNumber, obj)) // false

