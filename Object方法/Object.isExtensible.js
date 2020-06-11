// object.isExtensible ()

// 新对象默认是可扩展的
const empty = {}
console.log(Object.isExtensible(empty)) // true

Object.preventExtensions(empty) // 阻止扩展
console.log(Object.isExtensible(empty)) // false

const frozen = Object.freeze({}) // 冻结对象
console.log(Object.isExtensible(frozen)) // false

const sealed = Object.seal({}) // 密封一个对象
console.log(Object.isExtensible(sealed)) // false