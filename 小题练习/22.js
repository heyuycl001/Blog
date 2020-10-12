let a = 1
let obj = {
  a: 2,
  fn: function () {
    console.log(this.a)
  }
}

obj.fn() // 2

let fn = obj.fn
fn() // undefined 

/**
 * let 声明的变量不会挂载在window上
 */
