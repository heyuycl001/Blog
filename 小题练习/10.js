// 手写简易call
/**
 *  首先考虑this，是谁调用，this就是谁。
 */

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

/**
 * 如果我们把函数放到foo里，
 * 然后执行foo.bar()，此时this是不是已经绑定成功了
 */

Function.prototype.call2 = function call2 (content) {
  content.fn = this
  content.fn()
  delete content.fn
}
// bar.call2(foo) // 此时this真的绑定成功了

/**
 * 下面考虑如何传参数
 */
Function.prototype.call2 = function call2 (content) {
  const args = Array.from(arguments).slice(1)
  content.fn = this
  content.fn(...args)
  delete content.fn
}
bar.call2(foo, 199, 200)

/**
 * 参数也绑定成功了
 */

/**
 * this的参数可以为null，如果传null，则指向window
 * 还可以有返回值
 */
Function.prototype.call2 = function call2 (content) {
  const args = Array.from(arguments).slice(1)
  content = content || window
  content.fn = this
  let result = content.fn(...args)
  delete content.fn
  return result
}
let st = bar.call2(foo, 199, 200)
console.log(st)
