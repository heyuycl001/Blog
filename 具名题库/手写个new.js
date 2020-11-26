function Fn(name) {
    this.name = name
}

const fn = new Fn('hy')

// console.log(fn.name)


function _new() {
    // 创建一个空对象
    const obj = {}
    // 取出构造函数 并 把构造函数的this 指向 空对象
    const Func = [].shift.call(arguments)
    const result = Func.apply(obj, arguments)

    // 修改空对象的原型 
    obj.__proto__ = Fn.prototype
    // 根据返回值返回
    return typeof result === 'object' ? result : obj
}

const fn1 = _new(Fn, 'hy')
console.log(fn1.name);