//请写出代码执行结果，并解释为什么
function fn () {
  console.log(1)
}
(function () {
  if (false) {
    function fn () {
      console.log(2)
    }
  }
  console.log(typeof fn)
  fn()
})()

// undefined
// fn is not a function

/**
 *  解析
 *  直接在函数体内定义的函数声明，整个都会提前，但是在块中定义的函数声明，只会提升声明部分，不分配实际内存空间。
 *  所以fn被提升的只是声明的函数名称变量，并未实际赋值。
 */
以上代码等价于
function fn () {
  console.log(1)
}
(function () {
  var fn;
  if (false) {
    function fn () {
      console.log(2)
    }
  }
  console.log(typeof fn)
  fn()
})()


function fn () {
  console.log(1)
}
(function () {
  console.log(typeof fn)
  fn()
  function fn () {
    console.log(2)
  }
})()
/**
 * 所以这样的话就会输出
 * function
 * 2
 */