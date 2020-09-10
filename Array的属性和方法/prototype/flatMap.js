/**
 * [].flatMap()
 * 首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。
 * 它与map连着深度值为1的flat几乎相同，但是flatMap 通常在合并成一种方法的效率稍微高一些。
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
 *   新数组
 */

const array = [1, 2, 3, 4, 5]
const array1 = [1, 2, 3, 4, 5]

console.log(array.map((x) => x * 2)) // [ 2, 4, 6, 8, 10 ]

console.log(array1.flatMap(x => x * 2)) // [ 2, 4, 6, 8, 10 ]