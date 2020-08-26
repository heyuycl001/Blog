// 手写bind
// 首先bind返回一个函数

Function.prototype.bind2 = function (context) {
  return function () {
    this.apply(context)
  }
}
/**
 * 最简单的bind函数实现啦
 * 然后考虑一下赋值
 * 刚开始调用bind2可以赋值，还可以给return的函数赋值
 */

Function.prototype.bind2 = function (context) {
  var args = Array.prototype.slice.call(arguments, 1)
  return function () {
    var bindArgs = Array.prototype.slice.call(arguments)
    return this.apply(context, args.concat(bindArgs))
  }
}

/**
 * 最后bind完return一个函数，还可以new它
 */
Function.prototype.bind2 = function (context) {
  var _this = this
  var args = Array.prototype.slice.call(arguments, 1)
  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments)
    // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
    // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
    return _this.apply(this instanceof fBound ? this : context, args.concat(bindArgs))
  }

  return fBound
}


var foo = {
  value: 1
};
function bar (a, b) {
  console.log(a, b)
  console.log(this.value);
  return {
    value: this.value
  }
}
var result = bar.bind2(foo, 5)
result(10)
