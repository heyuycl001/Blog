/**
 * Array.of()
 * 方法可以创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
 */

/**
 * demo
 */

console.log(Array(5)) // [empty × 5]

console.log(Array.of(5)) // [ 5 ]

console.log(Array.of(5, 6, 7)) // [ 5, 6, 7 ]

/**
 * 总结
 * Array(5) 创建的是一个长度为5，且元素都为empty的数组
 * Array.of(5) 创建的是一个长度为1，且元素为5的数组
 */