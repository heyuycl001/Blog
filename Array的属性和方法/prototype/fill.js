/**
 * [].fill()
 * 用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
 */


/**
 * demo
 * 参数
 *   - value
 *     用来填充数组元素的值。
 *   - start
 *     起始索引，默认值为0。
 *   - end
 *     终止索引，默认值为this.length
 */
const array = [1, 2, 3, 4, 5]
// 把 5 填充中 到 索引0-2(不包括2)
console.log(array.fill(5, 0, 2)) // [ 5, 5, 3, 4, 5 ]


console.log(Array(10).fill(5)) // 创建一个长度为10，并且内容都为5的元素。
/**
 *  [
 *     5, 5, 5, 5, 5,
 *     5, 5, 5, 5, 5
 *  ]
 */

console.log(Array(10).fill(5, 0, 5).fill(2, 5, 10))
/**
 *  [
 *     5, 5, 5, 5, 5,
 *     2, 2, 2, 2, 2
 *  ]
 */


const arr = Array(3).fill({}) // 引用类型都指向了同一引用类型
arr[0].name = 'hy'
console.log(arr) // [ { name: 'hy' }, { name: 'hy' }, { name: 'hy' } ]