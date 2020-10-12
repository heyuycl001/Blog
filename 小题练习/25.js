// 利用发布订阅实现自定义事件

let sub = (function () {

  let pond = {}

  let on = function on (type, func) {
    !pond[type] ? pond[type] = [] : null;

    let arr = pond[type],
      i = 0;

    for (; i < arr.length; i++) {
      if (arr[i] === func) {
        return;
      }
    }
    pond[type].push(func)
  }

  let off = function off (type, func) {
    !pond[type] ? pond[type] = [] : null;

    let arr = pond[type],
      i = 0;

    for (; i < arr.length; i++) {
      if (arr[i] === func) {
        arr[i] = null
        return;
      }
    }

  }

  let fire = function fire (type, ...params) {
    !pond[type] ? pond[type] = [] : null;

    let arr = pond[type],
      i = 0;

    for (; i < arr.length; i++) {
      if (arr[i] === null) {
        arr.splice(i, 1)
        i--
        continue;
      }

      arr[i](...params)
    }
  }


  return {
    on,
    off,
    fire
  }

})()

let fun1 = x => console.log('FUN1', x)
let fun2 = x => console.log('FUN2', x)

sub.on('hy', fun1)
sub.on('hy', fun1)
sub.on('hy', fun2)

setTimeout(() => {
  sub.fire('hy', 10)
}, 1000);