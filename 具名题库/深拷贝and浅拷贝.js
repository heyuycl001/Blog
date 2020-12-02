const obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4
    }
}
// 浅拷贝

const obj2 = Object.assign({}, obj)
obj2.a = 111
obj2.c.e.n = 555
//console.log(obj)  // { a: 1, b: 2, c: { d: 3, e: 4 } }
//console.log(obj2) // { a: 111, b: 2, c: { d: 3, e: 4 } }

const obj3 = {
    ...obj
}
obj3.a = 111
obj3.c.e.n = 555
console.log(obj) // { a: 1, b: 2, c: { d: 3, e: 4 } }
console.log(obj3) // { a: 111, b: 2, c: { d: 3, e: 4 } }

// 数组浅拷贝
// cancat
// [...arr]
// Array.prototype.slice

// 深拷贝

function _deepClone(obj) {
    if (obj === null) return null
    // 正则对象
    // 日期时间对象
    // ...

    if (typeof obj === 'object') return obj

    const newOjb = new obj.constructor
    for (let o in obj) {
        if (!obj.hasOwnProperty(o)) return;
        newOjb[o] = _deepClone(obj[o])
    }
    return newOjb
}

const nObj = _deepClone(obj)
console.log(nObj)