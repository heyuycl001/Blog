/**
 * Array.from()
 * 从一个类数组或可迭代对象创建一个新的，浅拷贝的数组实例。
 */


/**
 * Demo
 */
console.log(Array.from('hy'))
// [ 'h', 'y' ]
const obj = {
  y: 2
}
console.log(Array.from([1, 2, 3, 4], function (x) {
  return x * this.y
}, obj))
// [ 2, 4, 6, 8 ]

/**
 * 语法
 * Array.from(arrayLike[, mapFn[, thisArg]])
 * 参数
 * arrayLike
 *  想要转换为数组的伪数组对象或可迭代对象。
 * mapFn(可选)
 *  如果指定了该参数，新数组中的每个元素会执行该回调函数。
 * thisArg(可选)
 *  执行回调函数mapFn时的this对象。
 */