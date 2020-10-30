/**
 * [].indexOf()
 * 返回数组中找到的第一个给定元素的索引，如果不存在，则返回-1
 */

/**
 * demo
 * 参数
 *   - searchElement
 *     需要查找的元素值
 *   - fromIndex
 *     从fromIndex处开始查找
 */

console.log([1, 2, 3].indexOf(2)) // 1
console.log([1, 2, 3].indexOf(5)) // -1
console.log([1, 2, 3].indexOf(3, 10)) // -1
console.log([1, 2, 3].indexOf(3, -1)) // 2
console.log([1, 2, 3, NaN].indexOf(NaN)); // -1