/**
 * [].includes()
 * 用来判断一个数组是否包含一个指定的指，根据情况，如果包含则返回true，不包含返回false
 * 它返回一个布尔值
 */

/**
 * demo
 * 参数
 *   - valueToFind
 *     需要查找的元素值
 *   - fromIndex
 *     从fromIndex处开始查找
 */

console.log([1, 2, 3].includes(2)) // true
console.log([1, 2, 3].includes(5)) // false
console.log([1, 2, 3].includes(3, 10)) // false // 如何长度大于数组长度则直接返回false，不在检查数组
console.log([1, 2, 3].includes(3, -1)) // true
console.log([1, 2, 3, NaN].includes(NaN)); // true

// 作为方法使用
(function () {
    console.log([].includes.call(arguments, 'a')) // true
    console.log([].includes.call(arguments, 'd')) // false
})('a', 'b', 'c')