let obj = {
    a: 1
}
let obj2 = {
    a: 2
}
let obj3 = {
    a: 3
}
let obj4 = {
    a: 4
}

function foo() {
    console.log(this.a)
}

let boundFn = foo.bind(obj)
// 根据手写bind2的思路 foo.bind(obj) 相当于
boundFn = function () {
    return foo.apply(obj)
}

let boundFn1 = foo.bind(obj).bind(obj2)
// 相当于
boundFn1 = function () {
    return boundFn.apply(obj2)
}
// 相当于

boundFn1 = function () {
    return function () {
        return foo.apply(obj)
    }.apply(obj2)
}

// 所以无论使用bind绑定多少次，最终原函数的this值是由第一次绑定传的参数决定的。