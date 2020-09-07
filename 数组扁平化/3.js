// 数组扁平化是指将一个多维数组变为一维数组

let arr = [1, [2, 3, [4, 5]]]

function flatten (arr) {
  return arr.join(',').split(',').map(item => {
    return parseInt(item)
  })
}

console.log(flatten(arr))


let a = 1
let b = 2

let = [b, a] = [a, b]

console.log(b, a)