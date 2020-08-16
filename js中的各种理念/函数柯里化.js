// 实现add(1)(2)(3)
// 函数柯里化概念： 柯里化 是把接受多个参数的函数转变为接受一个单一参数的函数，并且返回接受余下的参数且返回结果的新函数的技术


// 1) 粗暴版
// function add (a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c
//     }
//   }
// }
// console.log(add(1)(2)(3)) // 6

// 2) 柯里化方案
// 参数固定
const curry = (fn) => {
  return judge = (...args) => {
    return args.length === fn.length ? fn(...args) : (...arg) => {
      return judge(...args, ...arg)
    }
  }

}
// const add = (a, b, c) => a + b + c
// const curryAdd = curry(add)
// console.log(curryAdd(1)(2)(3)) // 6
// console.log(curryAdd(1, 2)(3)) // 6
// console.log(curryAdd(1)(2, 3)) // 6


// 参数不固定
function add (...args) {
  return args.reduce((a, b) => a + b)
}

function currying (fn) {
  let args = []
  return function temp (...newArgs) {
    if (newArgs.length) {
      args = [
        ...args,
        ...newArgs
      ]
      return temp
    } else {
      let val = fn.apply(this, args)
      args = []
      return val
    }
  }
}

let addCurry = currying(add)
console.log(addCurry(1)(2)(3, 4, 5)()) // 15
console.log(addCurry(1)(2)(3)(4, 5)()) // 15
console.log(addCurry(1, 2, 3, 4)(5)()) // 15
console.log(addCurry(1)(2, 3, 4, 5)()) // 15