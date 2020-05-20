// 1) 定义一个数据源
let obj = {
  value: 0
}

// 2)定义一个Dep,用于储存watcher
class Dep {
  constructor() {
    this.subs = []
  }
  addSub(sub) {
    this.subs.push(sub)
  }
  // ...removeSub
  // ...depend
  notify(newValue) {
    this.subs.forEach(function (fn) {
      fn(newValue)
    })
  }
}

// 3) 模拟Compile出来的watchers, 该demo涉及到两个地方重新render，一个是p标签，一个是input标签，所以写两个watcher，然后存入Dep
function renderInput(newValue) {
  const el = document.getElementById('view');
  if (el) el.value = newValue
}

function renderP(newValue) {
  const el = document.getElementById('data');
  if (el) el.innerHTML = newValue
}
// 4) 讲解析出来的watcher存进Dep
let dep = new Dep()
dep.addSub(renderInput)
dep.addSub(renderP)

// 5) 使用Object.defineProperty 定义一个Observer
function observer(obj, key, val) {
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      return val
    },
    set: function (newValue) {
      if (val !== newValue) {
        val = newValue
        dep.notify(newValue)
      }
    }
  })
}

//6) 初始化
function initMVVM(obj) {
  Object.keys(obj).forEach(function (key) {
    observer(obj, key, obj[key])
  })
}
//初始化数据源
initMVVM(obj)

//初始化页面，将数据源渲染到UI
dep.notify(obj.value);