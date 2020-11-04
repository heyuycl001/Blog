/**
 * [].map()
 * 返回一个新数组，新数组的值是该数组中的值调用提供函数后的返回值。
 */

/**
 * demo
 * 参数
 *   - callback
 *     生成新数组元素的函数。
 *     - currentValue
 *       callback数组中正在处理的当前元素。
 *     - index
 *       callback数组中正在处理的当前元素的索引。
 *     - array
 *       map正在处理的数组。
 *   - thisArg
 *     执行callback函数时值被用作this
 */

const arr = [1, 2, 4, 3, 2, 5, 3, 6, 3]
const obj = {
    y: 2
}

const Marr = arr.map((item, index, array) => {
    console.log(item, index, array)

    return item + 10
})

console.log('Marr', Marr)

const MarrO = arr.map(function (item) { // 如果要使用thisArg参数，请不要使用剪头函数。
    return item * this.y
}, obj)
console.log('MarrO', MarrO)