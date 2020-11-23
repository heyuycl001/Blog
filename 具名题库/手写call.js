const obj = {
    name: 'hy'
}

function fn(big) {
    console.log(big)
    return this.name
}
console.log(fn.call(obj, 'xiao'))

Function.prototype.call2 = function call2(obj, ...args) {
    obj = obj || window
    obj.fn = this
    const result = obj.fn(...args)
    delete obj.fn
    return result
}
console.log(fn.call2(obj, 'xiao2'))