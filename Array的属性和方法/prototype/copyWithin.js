/**
 * array.copyWithin(target, start, end)
 * 浅复制数组的一部分到同数组中的另一个位置，并返回它，不会改变原数组的长度。
 * 数组浅拷贝
 * target：必须。复制到指定目标索引位置。
 * start：可选。元素复制的起始位置。
 * end：可选。复制的终点位置（默认为array.length）。如果为负值，表示倒数 (不包括此数)
 */

/**
 * demo
 */

const array1 = ['a', 'b', 'c', 'd', 'e'] // 复制索引为【3】的值，到索引 【0】，直接替换
console.log(array1.copyWithin(0, 3, 4)) // [ 'd', 'b', 'c', 'd', 'e']

const letter = ["A", "B", "C", "D", "E", "F"]; // 复制索引为 【3，4】的值，到索引【2】，直接替换
console.log(letter.copyWithin(2, 3, 5)) // ["A", "B", "D", "E", "E", "F"]


const array2 = [{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]
console.log(array2.copyWithin(3, 2, 4)) // 复制索引为【2，3】的值，到索引【3】，直接替换
// [{ name: 1 }, { name: 2 }, { name: 3 }, { name: 3 }, { name: 4 }]