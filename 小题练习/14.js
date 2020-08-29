// 函数防抖跟截流

/**
 * 防抖
 * 函数n秒内只执行一次，在执行，则n(时间)从新计算
 */

function debounce (fn, wait) {
  let timer = null
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this)
    }, wait);
  }
}

/**
 * 节流
 * 每n秒内只执行一次，如果在执行，则return
 */

function throttle (fn, wait) {
  let flag = true
  return () => {
    if (!flag) return
    flag = false
    setTimeout(() => {
      fn.apply(this)
      flag = true
    }, wait);
  }
}

/**
 * 总结
 * 函数节流不管事件触发有多频繁，都会保证在规定时间内一定会执行一次函数。
 * 函数防抖只是在最后一次才会触发函数。
 */