function Fn(a) {
    this.a = a
}
let fn = new Fn('fn、a')

console.log(fn)


// 分析new做了什么
// 1、创建了一个空对象
// 2、执行构造函数并把this指向空对象，并且把参数传递下去。
// 3、把新对象的原型，指向构造函数的prototype
// 4、判断构造函数的返回值是否是引用类型，如果是则返回引用类型，如果不是，咋返回这个新对象
function _new() {
    const obj = {}
    const _args = [].shift.call(arguments)
    const result = _args.apply(obj, arguments)
    obj.__proto__ = _args.prototype
    return typeof result === 'object' ? result : obj
}

let fn1 = _new(Fn, 1)
console.log(fn1.a) // 1