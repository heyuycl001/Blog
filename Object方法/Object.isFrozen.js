// Object.isFrozen() true | false true:冻结 false:非冻结

// 一个对象默认是可扩展的，所以它是非冻结的
console.log(Object.isFrozen({})) // false


// 一个不可扩展的空对象同时也是一个冻结对象
const result = Object.preventExtensions({})
console.log(Object.isFrozen(result)) // true


// 一个非空对象默认也是非冻结的
const obj = {
  p: 42
}
console.log(Object.isFrozen(obj)) // false



// 让一个对象变得不可扩展，并不意味着这个对象变成了冻结对象。
// 因为p属性仍然是可以配置的(而且是可写的)
Object.preventExtensions(obj)
console.log(Object.isFrozen(obj)) // false

// 此时，如果删除了这个属性，则它会成为一个冻结对象。
delete obj.p
console.log(Object.isFrozen(obj)) // true



// 一个不可扩展的对象，拥有一个不可写但可配置的属性，则它仍然是非冻结的
const obj1 = {
  p: 42
}
Object.preventExtensions(obj1)
Object.defineProperty(obj1, 'p', { // 变得属性不可更改
  writable: false
})
console.log(Object.isFrozen(obj1)) // false

// 把这个对象设置为不可配置，会让这个对象变成冻结对象
Object.defineProperty(obj1, 'p', { // 变得不可配置，属性符不能更改
  configurable: false
})
console.log(Object.isFrozen(obj1)) // true



// 一个不可扩展的对象,拥有一个不可配置但可写的属性，则它仍然是非冻结的。
const obj2 = {
  p: 42
}
Object.preventExtensions(obj2)
Object.defineProperty(obj2, 'p', { // 变得不可配置，属性符不能更改
  configurable: false
})
console.log(Object.isFrozen(obj2)) // false

//那这个属性改为不可写。会让这个对象成为冻结对象
Object.defineProperty(obj2, 'p', { // 不可改
  writable: false
})
console.log(Object.isFrozen(obj2)) // true




// 一个不可扩展的对象，值拥有一个访问器属性，则它仍然是非冻结的
const obj3 = {
  get p() {
    return 42
  }
}
Object.preventExtensions(obj3)
console.log(Object.isFrozen(obj3)) // false
// 但是把这个属性改为不可配置，则会让这个对象变成冻结对象
Object.defineProperty(obj3, 'p', { // 变得不可配置，属性符不能更改
  configurable: false
})
console.log(Object.isFrozen(obj3)) // true




// 使用Object.freeze 是冻结一个对象最方便的方法
const obj4 = {
  p: 42
}
console.log(Object.isFrozen(obj4)) // false
Object.freeze(obj4)
console.log(Object.isFrozen(obj4)) // true


// Object.isSealed() 判断一个对象是否被密封
// 一个冻结对象也是一个密封对象
console.log(Object.isSealed(obj4)) // true

// Object.isExtensible 判断一个对象是否是可扩展的
// 当前更是一个不可扩展的对象
console.log(Object.isExtensible(obj4)) // false