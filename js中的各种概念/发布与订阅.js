// 由于面试被问到发布订阅跟观察者的却别说的不是很好
// 所以整理一下

/**
 * 发布与订阅模式
 * 发布-订阅模式包含三个模块：订阅者、发布者、处理中心;
 * 处理中心相当于报刊办事大厅。发布者相当于某个杂志负责人，他来中心注册一个杂志，而订阅者相当于用户，我在中心订阅了这份杂志。
 * 每当发布者发布新的杂志，都会自动通知订阅者。
 * 我理解的 发布订阅模式是先订阅在发布
 */

/**
 * // 比如我们常用的
 * // 相当于我们订阅了一个点击事件。这个点击事件啥时候触发我们不关心，但是只要一点触发点击事件，就会执行我们所写的函数
 * el.addEventListener('click', function () {
 *    console.log('执行了事件')
 * })
 */

class Event {
  constructor() {
    this.deps = []
  }
  addDep (dep) {
    this.deps.push(dep)
  }

  notify () {
    this.deps.forEach(dep => dep.apply(this))
  }
}


const xiaohong = new Event()
const xiaoming = new Event()
function maifang () {
  console.log('买房')
}
function maiche () {
  console.log('买车')
}
xiaohong.addDep(maifang)
xiaohong.addDep(maiche)

xiaohong.notify()
xiaoming.notify()