/**
 * [].lastIndexOf()
 * 返回指定元素在数组的最后一个位置的索引，如果不存在则返回-1。从数组的后面查找，从fromIndex处开始。
 */

/**
 * demo
 * 参数
 *   - searchElement
 *     被查找的元素
 *   - fromIndex
 *     从fromIndex开始逆向查找。默认为数组的长度-1，即整个数组都被查找。
 *         如果fromIndex大于或者等于数组的长度，则整个数组都会被查找。
 *         如果为负值,则视为从数组的末尾往前开始偏移，即使值为负值，既然会从后往前查找。
 *         如果为负值，并且其绝对值大于数组长度，则停止查找，返回-1。
 */

const arr = [1, 2, 4, 3, 2, 5, 3, 6, 3]
console.log(arr.lastIndexOf(2)) // 4
console.log(arr.lastIndexOf(3, 3)) // 3  
console.log(arr.lastIndexOf(3, -3)) // 6
console.log(arr.lastIndexOf(5, 11)) // 5
console.log(arr.lastIndexOf(5, -10)) // -1