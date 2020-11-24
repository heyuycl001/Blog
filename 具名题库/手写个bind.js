const obj = {
    name: 'hy'
}

function fn(a, b) {
    console.log(a, b)
    return this.name
}

const result = fn.bind(obj, 1)

result(10)

Function.prototype.bind2 = function bind2(obj, ...arr) {
    const _this = this
    const fBound = function () {
        const args = [].split.call(arguments)
        _this.apply(this instanceof fBound ? this : obj, arr.concat(args))
    }
    return fBound
}

const result1 = fn.bind2(obj, 2)

result(20)