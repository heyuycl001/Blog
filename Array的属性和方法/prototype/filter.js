/**
 * [].filter()
 * 创建一个新数组，包含通过所提供函数实现的测试的所有元素。
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
function isNumber (e, index, arr) {
  // console.log(e) // 数组的每一项
  // console.log(index) // 每一项的索引
  // console.log(arr) // 数组
  return typeof e === 'number'
}
const array = [1, 2, '3', 4, 5]
// 筛选符合条件的item
console.log(array.filter(isNumber)) // [ 1, 2, 4, 5 ]
