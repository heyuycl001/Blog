/**
 * [].push()
 * 在数组后面添加一个或者多个元素，并返回新的长度。
 */

/**
 * demo
 * 参数
 *   - elementN
 *     被添加到数组末尾的元素。
 */

const arr = [1, 2, 4, 3, 2, 5, 3, 6, 3]

const Parr = arr.push(20)
console.log(Parr) // 10 返回新的长度
console.log(arr)[1, 2, 4, 3, 2, 5, 3, 6, 3, 20]