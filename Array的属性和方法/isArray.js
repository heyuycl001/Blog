/**
 * Array.isArray()
 * 用于确定传递的值是否是一个Array。
 */


/**
 * Demo
 */

// 以下代码都返回true
Array.isArray([])
Array.isArray([1])
Array.isArray(new Array())
Array.isArray(new Array('a', 'b'))
// 鲜为人知的事实：其实 Array.prototype也是一个数组
Array.isArray(Array.prototype)
// 以下代码都返回false
Array.isArray()
Array.isArray({})
Array.isArray(null)
Array.isArray(undefined)
Array.isArray(1)
Array.isArray('Array')
Array.isArray(true)
Array.isArray(new Uint8Array(32))
Array.isArray({ __proto__: Array.prototype })

/**
 * 语法
 * Array.isArray(obj)
 * 参数
 * obj
 *  需要检测的值。
 * 返回值
 *  如果值是 Array，则为true; 否则为false。
 */