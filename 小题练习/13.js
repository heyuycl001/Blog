// 手写 new
// 分析 new具体干了啥
var Func = function (a) {
  this.a = a
  return 10
};
var func = new Func();
console.log(func)
/**
 * 首先他肯定是创建了一个新对象obj（这就是你创建的实例对象)
 * 执行了Func函数体，并且把指向obj （实例对象）
 * 
 * 然后把obj的原型 指向 Func的prototype
 * 判断Func的返回值类型。如果是值类型，就返回obj。如果是引用类型，就反返回这个引用类型
 */


/**
 * 按照这个思路去模拟一个new
 */

function newFunc () {
  // 首先他肯定是创建一个新对象obj
  var obj = new Object()

  // 获取到 Func 
  // 并完成第二步：执行了Func函数体，并且把指向obj （实例对象）
  const func = [].shift.call(arguments)
  // 为啥 直接把 arguments 传过去，因为Array.shift()操作会影响到原数组。
  // 所以此时的 arguments已经去除了Func
  const result = func.apply(obj, arguments)

  // 然后把obj的原型 指向 Func的prototype
  obj.__proto__ = Func.prototype

  // 判断Func的返回值类型。如果是值类型，就返回obj。如果是引用类型，就反返回这个引用类型
  return typeof result === 'object' ? result : obj
}

var func1 = newFunc(Func, 10)
console.log(func1)