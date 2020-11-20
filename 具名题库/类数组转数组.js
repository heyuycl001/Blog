// 类数组转数组
function fn() {
    const args = arguments
    console.log(args) // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

    // es6 使用...运算符
    const arr1 = [...args]

    // Array.from
    const arr2 = Array.from(args)

    // Array.prototype.slice.call()
    const arr3 = Array.prototype.slice.call(args)


    console.log(arr1); // [ 1, 2, 3, 4, 5 ]
    console.log(arr2); // [ 1, 2, 3, 4, 5 ]
    console.log(arr3); // [ 1, 2, 3, 4, 5 ]
}
fn(1, 2, 3, 4, 5)