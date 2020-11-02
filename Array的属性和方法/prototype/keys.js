/**
 * [].keys()
 * 返回一个包含数组下标的Array Iterator对象
 */

/**
 * demo
 */

const arr = ['Wind', 'Rain', 'Fire']
const iterator = arr.keys()
console.log(iterator) // Object [Array Iterator] {}
for(const key of iterator){
    console.log(key)
    // 0
    // 1
    // 2
}