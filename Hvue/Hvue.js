class Vue {
  constructor(option) {
    // 保存选项
    this.$option = option
    // 传入data
    this.$data = option.data
    // 响应化处理
    this.observe(this.$data)

    new Watcher(this, 'name')
    this.name
  }

  observe (value) {
    // 如果data不是对象则return
    if (!value || typeof value !== 'object') return;
    // 遍历value
    Object.keys(value).forEach(key => {
      this.defineReactive(value, key, value[key])

      this.proxyDate(key)
    })

  }

  defineReactive (obj, key, val) {
    this.observe(val)

    // 定义一个dep
    const dep = new Dep()

    // 给obj的每一个key定义拦截
    Object.defineProperty(obj, key, {
      get () {

        // 依赖收集
        console.log(Dep.target)
        Dep.target && dep.addDep(Dep.target)

        return val
      },
      set (newVal) {
        if (newVal === val) return
        val = newVal
        dep.notify()
      }
    })
  }
  // 把 $data代理到Vue的实例上
  proxyDate (key) {
    Object.defineProperty(this, key, {
      get () {
        return this.$data[key]
      },
      set (newVal) {
        this.$data[key] = newVal
      }
    })
  }

}

// 创建Dep，管理所有的Watcher
class Dep {
  constructor() {
    this.deps = []
  }
  addDep (dep) {
    this.deps.push(dep)
  }

  notify () {
    this.deps.forEach(dep => dep.update())
  }
}

// 创建 Watcher：保存data中的数值和页面的挂钩关系
class Watcher {
  constructor(vm, key) {

    // 创建实例时立刻把该实例指向 Dep.target 便于依赖收集
    Dep.target = this
    this.vm = vm
    this.key = key
  }

  // 更新
  update () {
    console.log(this.key + '更新了')
  }
}