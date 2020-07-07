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
    this.resolveArr.push(resolveFn)
    this.rejectArr.push(rejectFn)
  }
}