// function Class1 () {
//   console.log('初始化')
// }
// Class1.prototype.method = function (param) {
//   console.log(param)
//   return this
// }
// let c1 = new Class1()

// c1.method('第一次调用').method('第二次调用')



// const obj = {
//   a: function () {
//     console.log('a')
//     return this
//   },

//   b: function () {
//     console.log('b')
//     return this
//   }
// }

// obj.a().b()


// class Math {
//   constructor(value) {
//     this.hasInit = true
//     this.value = value
//     if (!value) {
//       this.value = 0
//       this.hasInit = false
//     }
//   }

//   add () {
//     let args = [...arguments]
//     let initValue = this.hasInit ? this.value : args.shift()
//     const value = args.reduce((prev, curv) => prev + curv, initValue)

//     return new Math(value)
//   }

//   minus () {
//     let args = [...arguments]
//     let initValue = this.hasInit ? this.value : args.shift()
//     const value = args.reduce((prev, curv) => prev - curv, initValue)

//     return new Math(value)
//   }

//   mul () {
//     let args = [...arguments]
//     let initValue = this.hasInit ? this.value : args.shift()
//     const value = args.reduce((prev, curv) => prev * curv, initValue)

//     return new Math(value)
//   }

//   divide () {
//     let args = [...arguments]
//     let initValue = this.hasInit ? this.value : args.shift()
//     const value = args.reduce((prev, curv) => prev / (+curv ? curv : 1), initValue)

//     return new Math(value)
//   }
// }

// let test = new Math()
// const result = test.add(222, 333, 444).minus(333, 222).mul(3, 3).divide(2, 3)
// console.log(result.value)


Number.prototype.add = function add () {
  let _this = this
  _this = [...arguments].reduce((prev, curv) => prev + curv, _this)

  return _this
}

Number.prototype.minus = function minus () {
  let _this = this
  _this = [...arguments].reduce((prev, curv) => prev - curv, _this)

  return _this
}

Number.prototype.mul = function mul () {
  let _this = this
  _this = [...arguments].reduce((prev, curv) => prev * curv, _this)

  return _this
}

Number.prototype.divide = function divide () {
  let _this = this
  _this = [...arguments].reduce((prev, curv) => prev / (+curv ? curv : 1), _this)

  return _this
}

let num = 0

const result = num.add(222, 333, 444).minus(333, 222).mul(3, 3).divide(2, 3)
console.log(result)