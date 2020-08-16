console.log('start')
setTimeout(() => {
  console.log('shildren2')
  Promise.resolve().then(() => {
    console.log('children3')
  })
}, 0);
new Promise(function (resolve, reject) {
  console.log('children4')
  setTimeout(() => {
    console.log('children5')
    resolve('children6')
  }, 0);
}).then((res) => {
  console.log('children7')
  setTimeout(() => {
    console.log(res)
  }, 0);
})

/**
 * start
 * children4
 * children2
 * children3
 * children5
 * children7
 * children6
 */

/**
 * 解析：
 * 1. 先执行宏任务script脚本
 * 2. console.log('start')执行
 * 3. 遇到定时器放入宏任务队列、
 * 4. 执行Promise 直接执行executor,输出 children4
 * 5. 把Promise里面的定时器放入宏任务队列,此时第一轮任务执行完毕
 * 6. 进入定时器，输出children2 并把.then里面输出的内容放到微任务队列中。此时宏任务执行完毕，输出微任务 children3
 * 7. 执行第二个定时器，输出 children5。并把.then放入微任务队列中，当前宏任务执行完毕，输出 children7，遇到定时器放入宏任务中
 * 8. 取出定时器任务，执行children6
 */

/**
 * 原理
 * 1. js是单线程，最大特点就是维持了一个事件循环
 * 2. 事件循环的组成由主线程和任务队列
 * 3. 执行方式就是主线程不停从任务队列一个一个取出任务进行执行。
 * 4. 任务分为宏任务跟微任务
 * 5. 每一个宏任务内部维持了一个微任务队列，为了让高优先的任务及时执行。也即是每取出一个宏任务，执行完毕后。检查当前宏任务是否由微任务可执行。
 */