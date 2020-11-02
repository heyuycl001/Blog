/**
 * [].join()
 * 将一个数组(或一个类数组)的所有元素连成一个字符串并返回这个字符串。
 */

/**
 * demo
 * 参数
 *   - separator
 *     分隔符
 */

const strArr = ['Wind', 'Rain', 'Fire']

const str1 = strArr.join()
console.log(str1) // 'Wind,Rain,Fire'
const str2 = strArr.join('，')
console.log(str2) // 'Wind，Rain，Fire'
const str3 = strArr.join(' + ')
console.log(str3) // 'Wind + Rain + Fire'
const str4 = strArr.join('-')
console.log(str4) // 'Wind-Rain-Fire'
