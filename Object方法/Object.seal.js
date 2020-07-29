// Object.seal() 
// 封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要原来是可写的就可以更改


// 描述
/**
  通常，一个对象是可扩展的(可以添加新的属性)。密封一个对象会让这个对象变的不能添加新属性，且所有已有的属性
  会变得不可配置。属性不可配置的效果就是不可删除，以及一个数据属性不能被重新定义成为访问器属性。但属性的值仍然可以被修改，
  尝试删除一个密封对象的属性或者将某个密封对象的属性从数据属性转换为访问器属性。都会静默失败或者抛出 TypeError.

  不会影响从原型链上继承的属性。但是__proto__属性得值也会不能修改。 
  
 */



var obj = {
  prop: function () {},
  foo: 'bar'
}

// 可以添加新属性。
// 可以删除和更改属性
obj.foo = 'baz'
obj.lumpy = 'woof';
delete obj.prop;


var o = Object.seal(obj)

o === obj // true
Object.isSealed(obj) // true

// 仍然可以修改密封对象的属性值

obj.foo = 'quux'


// 但是不能将属性从新定义为访问器属性。
// 反之亦然
Object.defineProperty(obj, 'foo', {
  get: function () {
    return 'a'
  }
}) // throws a TypeError

//除了属性值之外的的任何变化，都会失败。
// 添加属性失败
obj.quaxxor = 'hhh'
// 删除属性失败
delete obj.foo


// 在严格模式下，这样尝试会抛出错误
function fail() {
  'use strict';
  delete obj.foo // throws a TypeError
  obj.sparky = 'arf' // throws a TypeError
}

fail()

// 通过Object.defineProperty 添加属性会报错
Object.defineProperty(obj, 'hi', {
  value: 11
}) // throws a TypeError


// 通过Object.defineProperty修改属性值
Object.defineProperty(obj, 'foo', {
  value: 'eit'
}) // 可以修改