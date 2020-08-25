// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 0);
// }


// for (var i = 0; i < 5; i++) {
//   (function (i) {
//     setTimeout(() => {
//       console.log(i)
//     }, 0);
//   })(i)
// }


// var fn = (function () {
//   // 这样声明的变量为模块私有变量，外界无法访问
//   var foo = 0
//   function fn () { }
//   fn.prototype.bar = function bar () {
//     return foo
//   }
//   return fn
// })()


function bar () {
  var sum = 10
  function bzz () {
    return sum += 1
  }
  window.bzz = bzz
}
bar()
bzz()
bzz()
bzz()
bzz()
