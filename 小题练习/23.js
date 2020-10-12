function Fn (a) {
  this.a = a
}

let fn = new Fn(2)

console.log(fn.a) // 2

function _new () {
  const obj = {}
  // 第一步要把构造函数摘出来
  const fn = [].shift.call(arguments)
  // 第二步执行构造函数并把this指向obj ,并且把参数传递，此时的arguments已经去掉了构造函数
  const result = fn.apply(obj, arguments)
  // 把新对象的原型指向构造函数的prototype
  obj.__proto__ = fn.prototype
  // 判断Func的返回值类型。如果是值类型，就返回obj。如果是引用类型，就反返回这个引用类型
  return typeof result === 'object' ? result : obj
}

let fn1 = _new(Fn, 1)
console.log(fn1.a) // 1