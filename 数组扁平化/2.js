// 数组扁平化是指将一个多维数组变为一维数组

let arr = [1, [2, 3, [4, 5]]]

function flatten (arr) {
  var res = []
  arr.map((item) => {
    if (Array.isArray(item)) { // 如何是数组继续递归
      res = res.concat(flatten(item))
    } else {
      res.push(item)
    }
  })
  return res
}

console.log(flatten(arr))