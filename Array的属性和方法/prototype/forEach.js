/**
 * [].forEach()
 * 对数组的每个元素执行一次给定的函数
 */


/**
 * demo
 * 参数
 *   - callback
 *     可以生成一个新数组中的元素的函数，它可以接收三个参数。
 *       - currentValue
 *         当前的元素。
 *       - index
 *         用于测试的当前值的索引。
 *       - array
 *         调用every的当前数组
 *   - thisArg
 *     执行callback时使用的this的值。
 * 返回值
 *   undefined
 */

const array = [1, 2, 3, 4, , 5]
let numCallbackRuns = 0
array.forEach((e) => {
  console.log(e)
  numCallbackRuns++
})
// 遇见空值跳过
console.log(numCallbackRuns) // 5

