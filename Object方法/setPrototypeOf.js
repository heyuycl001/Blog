// Object.setPrototypeOf()
// 设置一个指定的对象的原型（即，内部[[Prototype]]属性） 到另一个对象或 null

// 描述
/**
  如果对象[[Prototyoe]]被修改程不可扩展（通过Object.isExtensible()查看）,就会抛出TypeError异常。
  如果prototype参数不是可以对象或者null（例如，数字，字符串，boolean，或者 undefined）, 则什么都不做。
  否则，该方法将obj的[[prototype]]修改为新的值

  Object.setPrototypeOf()是ECMAScript6最新草案中的方法，相对于Object.prototype.__proto__, 它被认为是修改对象原型更合适的方法
 */

// obj 
  // 要设置其原型的对象。

// prototype
  // 该对象的新原型（一个对象 或 null）

 // Object.setPrototypeOf(obj, prototype)