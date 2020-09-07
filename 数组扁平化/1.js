// 数组扁平化是指将一个多维数组变为一维数组

let arr = [1, [2, 3, [4, 5]]]

console.log([].concat(...arr)) // 此方法只能实现二维数组转化为一维数字


function flatten (arr) {
  while (arr.some(item => Array.isArray(item))) { // 如何数组里还有array，就继续...
    arr = [].concat(...arr);
  }
  return arr;
}

console.log(flatten(arr))