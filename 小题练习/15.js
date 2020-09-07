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

Function.prototype.call2 = function call2 (context, ...args) {
  context = context || window
  context.fn = this
  let result = context.fn(...args)
  delete context.fn
  return result
}

bar.call2(foo, 1, 2)

Function.prototype.apply2 = function apply2 (context, arr) {
  context = context || window
  context.fn = this
  let result = context.fn(...arr)
  delete context.fn
  return result
}
bar.apply2(foo, [3, 4])


Function.prototype.bind2 = function bind2 (context) {
  var args = Array.prototype.slice.call(arguments, 1)
  const _this = this
  let bindFn = function () {
    var bindArgs = Array.prototype.slice.call(arguments)
    _this.apply2(this instanceof bindFn ? this : context, args.concat(bindArgs))
  }
  return bindFn
}
let result = bar.bind2(foo, 5)
result(6)

function cc () {
  console.log(1)
}

function debounce (func, wait) {
  let timeout = null
  return function () {
    let _this = this
    clearTimeout(timeout)
    let args = Array.prototype.slice.call(arguments)
    timeout = setTimeout(() => {
      func.apply(_this, args)
    }, wait);
  }
}
debounce(cc, 3000)

function throttle (func, wait) {
  let timeout = null
  return function () {
    let _this = this
    let args = Array.prototype.splice.call(arguments)
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        func.apply(_this, args)
      }, wait);
    }
  }
}
throttle(cc, 3000)

const arr = [1, [1, 2], [1, 2, 3]]

console.log(arr.flat(Infinity))

class Promise2 {
  constructor(executor) {
    this.value = undefined
    this.status = 'pending'

    this.resArr = []
    this.rejArr = []

    let change = (status, value) => {
      if (this.status !== 'pending') return
      this.status = status
      this.value = value
      let fnArr = this.status === 'res' ? this.resArr : this.rejArr
      console.log(fnArr)
      fnArr.forEach(item => {
        if (typeof item !== 'function') return;
        item(this.value)
      })

    }

    let res = (res) => {
      if (this.resArr.length > 0) {
        change('res', res)
      }
    }
    let rej = (rej) => {
      if (this.rejArr.length > 0) {
        change('rej', rej)
      }
    }
    executor(res, rej)
  }
  then (resFn, rejFn) {
    this.resArr.push(resFn)
    this.rejArr.push(rejFn)
  }
}

let ss = new Promise2((res, rej) => {
  res(10)
}).then((res) => {
  console.log(res)
})