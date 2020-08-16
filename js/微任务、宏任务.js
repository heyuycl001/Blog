/**
 * > 微任务和宏任务是异步任务的两个种类
 * ##### 宏任务
 * 当前调用栈中执行的代码成为宏任务（主代码、定时器等等）
 *
 * ##### 微任务
 * 当前（此次事件循环中）宏任务执行完，在下一个宏任务开始之前需要执行的任务，可以理解为回调时间。（promise.then、proness.nextTick等等）
 * 宏任务中的事件放在 callback queue中，由事件触发线程维护；微任务的事件放在微任务队列中，由js引擎线程维护。
 * 在挂起任务时，js引擎会将所有任务按照类别分到这两个队伍中，首先在macrotask的队列中取出第一个任务，执行完毕后取出microtask队列中的所有任务顺序执行;之后再取macrotask任务，周而复始，直到两个队列中的任务都完成
 *
 **/

console.log('script start'); // 1. 普通代码执行

setTimeout(function () {     // 遇见宏任务 放宏任务队列
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function () {
  console.log('promise1'); // 遇见微任务 放到微任务队列
}).then(function () {
  console.log('promise2');  // 遇见微任务 放到微任务队列
});

console.log('script end'); // 2. 普通代码执行

/**
 * script start
 * script end
 * promise1
 * promise2
 * setTimeout
 */