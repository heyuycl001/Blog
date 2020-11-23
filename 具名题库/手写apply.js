const obj = {
    name: 'hy'
}

function fn(age) {
    console.log(age)
    return this.name
}

console.log(fn.apply(obj, [10, 11, 13]))

Function.prototype.apply2 = function apply2(obj, arr) {
    obj = obj || window
    obj.fn = this
    const result = obj.fn(...arr)
    delete obj.fn
    return result
}
console.log(fn.apply2(obj, [10, 11, 13]))