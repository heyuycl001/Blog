// 手写简易 apply
// 其实思路跟call是一样的，只是参数不一样

Function.prototype.apply2 = function (context, arr) {
  context = context || window
  context.fn = this
  let rusult = context.fn(...arr)
  delete context.fn
  return rusult
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
let st = bar.apply2(foo, [1, 2])
console.log(st)