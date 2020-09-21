const arr = [22, 11, 44, 55, 3, 44, 3, 11]


// 冒泡
/**
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      var temp = arr[j + 1]
      arr[j + 1] = arr[j]
      arr[j] = temp
    }
  }
}
console.log(arr)
*/

// 快速

function sort (arr) {
  if (arr.length <= 1) return arr
  const CIndex = Math.floor(arr.length / 2)
  const CValue = arr.splice(CIndex, 1)[0]
  const left = []
  const right = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > CValue) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return sort(left).concat([CValue], sort(right))
}
console.log(sort(arr))