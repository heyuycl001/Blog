// 数组扁平化

const arr = [
    [1, 2],
    [3, 4],
    [4, 5, 6, [4, 5]],
    7
]

// 方法一：flat
console.log(arr.flat(Infinity));

// 方法二：循环 + 递归 + concat
function arrFlat(array) {
    let result = []
    array.forEach(i => {
        if (Array.isArray(i)) {
            result = result.concat(arrFlat(i))
        } else {
            result.push(i)
        }
    })
    return result
}
console.log(arrFlat(arr));

// 方法三：递归 + reduce + concat
function arrFlat1(array) {
    return array.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? arrFlat1(cur) : cur)
    }, [])
}
console.log(arrFlat1(arr));