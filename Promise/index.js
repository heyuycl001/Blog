class myPromise {
  constructor(executor) {
    // 每一个Promise实例都有一个状态跟结果属性
    this.status = 'pending'
    this.value = undefined

    // 用来储存基于THEN执行的成功或者失败的方法
    this.resolveArr = []
    this.rejectArr = []

    let change = (status, value) => {
      if (this.status !== 'pending') return
      this.status = status
      this.value = value

      // 改变状态后 把THEN里的方法执行
      let fnArr = this.status === 'resolved' ? this.resolveArr : this.rejectArr
      fnArr.forEach(item => {
        if (typeof item !== 'function') return;
        item(this.value)
      })
    }

    // 为了保证执行resolve,reject的时候，已经通过THEN把需要执行的方法弄好了。所以我们需要判断
    let resolve = (result) => {
      if (this.resolveArr.length > 0) {
        change('resolved', result)
        return
      }
      let delayTimer = setTimeout(() => {
        change('resolved', result)
        clearTimeout(delayTimer)
      }, 0);
    }
    let reject = (reason) => {
      if (this.rejectArr.length > 0) {
        change('rejected', reason)
        return
      }
      let delayTimer = setTimeout(() => {
        change('rejected', reason)
        clearTimeout(delayTimer)
      }, 0);
    }
    // 每一次new Promise 的时候都会立即执行 executor 函数
    // 如果 executor 函数执行报错，将抛出异常
    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }
  then(resolveFn, rejectFn) {
    // 如果传递的参数不传 或者 null ,我们让成功或者失败顺沿
    if (typeof resolveFn !== 'function') {
      resolveFn = result => {
        return result
      }
    }
    if (typeof rejectFn !== 'function') {
      resolveFn = reason => {
        return myPromise.reject(reason)
      }
    }

    return new myPromise((resolve, reject) => {

      // 只要执行新实例的executor 就能知道新实例是成功还是失败的
      this.resolveArr.push(result => {
        try {
          // 不报错，根据结果判断是成功还是失败
          let x = resolveFn(result)
          if (x instanceof myPromise) {
            x.then(resolve, reject)
            return
          }
          resolve(x)
        } catch (err) {
          // 方法报错，也代表新实例也是失败的
          reject(err)
        }
      })
      this.rejectArr.push((reason) => {

        try {
          let x = rejectFn(reason)
          if (x instanceof myPromise) {
            x.then(resolve, reject)
            return;
          }
          resolve(x)
        } catch (err) {
          reject(err)
        }
      })
      // this.resolveArr.push(resolveFn)
      // this.rejectArr.push(rejectFn)
    })
  }
  // myPromise.prototype.catch === myPromise.prototype.then(null,reason )
  catch (rejectFn) {
    return this.then(null, rejectFn)
  }

  static resolve(result) {
    return new myPromise(resolve => {
      resolve(result)
    })
  }

  static reject(reason) {
    return new myPromise((_, reject) => {
      reject(reason)
    })
  }

}