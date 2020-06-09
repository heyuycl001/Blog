const obj = {
  name: 'h'
}

Object.defineProperty(obj, 'age', {
  value: 11
})

const result = Object.getOwnPropertyDescriptors(obj)

console.log(result)

// {
//   name: { value: 'h', writable: true, enumerable: true, configurable: true },
//   age: {
//     value: 11,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
// }

const target = {
  a: 1,
  b: 2
};

Object.assign(target, obj)

console.log(target) // { a: 1, b: 2, name: 'h' } 因为obj的age属性，是不可枚举属性
const result1 = Object.getOwnPropertyDescriptors(target)
console.log(result1)

// 浅拷贝一个对象
// Object.assign()方法只能拷贝源对象的可枚举属性，同时拷贝时无法拷贝属性的特性们,而且访问器属性会被转换成数据属性，也无法拷贝源对象的原型。
// 该方法配合Object.create() 方法可以实现上面说的这些

Object.create( // 使用现有的对象来提供新创建的对象的__proto__。
  Object.getPrototypeOf(obj), // 返回指定对象的原型(内部[[Prototype]])属性的值
  Object.getOwnPropertyDescriptors(obj)
)