// 防抖
// 简易版
/*
function debounce (func, wait) {
  let Timeout;
  return function () {
    const context = this
    const args = arguments
    clearTimeout(Timeout)
    Timeout = setTimeout(() => {
      func.apply(context, args)
    }, wait);
  }
}
*/
// 立即执行版
/**
function debounce (func, wait, immediate) {
  let Timeout
  return function () {
    const context = this
    const args = arguments
    if (Timeout) clearTimeout(Timeout)
    if (immediate) {
      const acllNow = !Timeout
      Timeout = setTimeout(() => {
        Timeout = null
      }, wait);
      if (acllNow) func.apply(context, args)
    } else {
      Timeout = setTimeout(() => {
        func.apply(context, args)
      }, wait);
    }
  }
}
 */

// 返回值版
/**
function debounce (func, wait, immediate) {
  let Timeout, result
  return function () {
    const context = this
    const args = arguments
    if (Timeout) clearTimeout(Timeout)
    if (immediate) {
      const acllNow = !Timeout
      Timeout = setTimeout(() => {
        Timeout = null
      }, wait);
      if (acllNow) result = func.apply(context, args)
    } else {
      Timeout = setTimeout(() => {
        func.apply(context, args)
      }, wait);
    }
    return result
  }
}
 */



// 节流

// 定时器版
/**
function throttle (func, wait) {
  let Timeout
  return function () {
    const context = this
    const args = arguments
    if (!Timeout) {
      Timeout = setTimeout(() => {
        Timeout = null
        func.apply(context, args)
      }, wait);
    }
  }
}
 */
// 时间戳版

function throttle (func, wait) {
  let context, args;
  let previous = 0
  return function () {
    let now = +new Date()
    context = this
    args = arguments
    if (now - previous > wait) {
      func.apply(context, args)
      previous = now
    }
  }
}