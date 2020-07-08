class myPromise {
  constructor(executor) {
    this.value = undefined
    this.status = 'pending'

    // 用来储存基于THEN执行的成功或者失败的方法
    this.resolveArr = []
    this.rejectArr = []

    let change = (status, value) => {
      if (this.status !== 'pending') return;
      this.status = status
      this.value = value

      // 改变状态后 把THEN里的方法执行
      let fnArr = this.status === 'resolved' ? this.resolveArr : this.rejectArr
      fnArr.forEach(item => {
        if (typeof item !== 'function') return;
        item(this.value)
      })
    }

    let resolve = (result) => {
      if (this.resolveArr.length > 0) {
        change('resolve', result)
      }

      let delayTimer = setTimeout(() => {
        clearTimeout(delayTimer)
        change('resolve', result)
      }, 0);
    }

    let reject = (reason) => {
      if (this.rejectArr.length > 0) {
        change('reject', reason)
      }
      let delayTimer = setTimeout(() => {
        clearTimeout(delayTimer)
        change('reject', reason)
      }, 0);
    }

    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then(resolveFn, rejectFn) {

    if (typeof resolveFn !== 'function') resolveFn = result => result

    if (typeof rejectFn !== 'function') {
      rejectFn = reason => {
        new myPromise((_, reject) => {
          reject(reason)
        })
      }
    }
    return new myPromise((resolve, reject) => {
      this.resolveArr.push(() => {
        try {
          let x = resolveFn(this.value)
          x instanceof myPromise ? x.then(resolve, reject) : resolve(x)

        } catch (err) {
          reject(err)
        }
      })
      this.rejectArr.push(() => {
        try {
          let x = rejectFn(this.value)
          x instanceof myPromise ? x.then(resolve, reject) : resolve(x)
        } catch (err) {
          reject(err)
        }
      })
    })
  }

  catch (rejectFn) {
    // catch (rejectFn) === then(null,rejectFn)
    return this.then(null, rejectFn)
  }

  // 静态方法
  static resolve(result) {
    return new myPromise(resolve => resolve(result))
  }
  static reject(reason) {
    return new myPromise((_, reject) => reject(reason))
  }

  static all(arr) {
    return new myPromise((resolve, reject) => {
      let index = 0
      let results = []
      for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        if (!(item instanceof myPromise)) continue;
        item.then((result) => {
          index++
          results[i] = result
          if (index === arr.length) {
            resolve(results)
          }
        }, (reason) => {
          reject(reason)
        })
      }
    })
  }

  static 
}