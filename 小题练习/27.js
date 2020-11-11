/**
 *  实现sum函数，使得
        sum(1,2,3).sumOf() //6
        sum(2,3)(2).sumOf() //7
        sum(1)(2)(3)(4).sumOf() //10
 */

/* 方法一

function sum() {
    const arr = [...arguments]

    function AddPro() {
        arr.push(...arguments)
        return AddPro
    }
    AddPro.sumOf = function sumOf() {
        return arr.reduce((a, b) => a + b)
    }
    return AddPro
}
*/


function sum() {
    if (!sum.arr) {
        sum.arr = []
    }
    sum.arr.push(...arguments)
    sum.sumOf = () =>
        sum.arr.reduce((a, b) => a + b)
    return sum
}
console.log(sum(1, 2, 3).sumOf())