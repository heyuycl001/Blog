// 1) --传入对象
const obj = {
  A: 'hy',
  B: 12
}
console.log(Object.entries(obj)) // [ [ 'A', 'hy' ], [ 'B', 12 ] ]

// 2) --传入数组
const arr = [1, 2, 3];
console.log(Object.entries(arr)) // [ [ '0', 1 ], [ '1', 2 ], [ '2', 3 ] ]

// 2.1) --数组中包含对象
const arr1 = [{
  a: 1
}, 2, 3]
console.log(Object.entries(arr1)) // [ [ '0', { a: 1 } ], [ '1', 2 ], [ '2', 3 ] ]

// 2.2) --数组中的值全为对象
const arr2 = [{
  a: 1
}, {
  b: 2
}, {
  c: 3
}]
console.log(Object.entries(arr2)) // [ [ '0', { a: 1 } ], [ '1', { b: 2 } ], [ '2', { c: 3 } ] ]

// 3) --字符串
const str = '123'
console.log(Object.entries(str)) // [ [ '0', '1' ], [ '1', '2' ], [ '2', '3' ] ]


// 4) --数组、浮点数
const num = 123
console.log(Object.entries(num)) // []

const float = 12.3
console.log(Object.entries(float)) // []

// 5) --布尔
const bool = true
console.log(Object.entries(bool)) // []

// 6) --结合以上示例实现一个Object.entries()方法
const entries = (obj) => {
  let resule = [];
  const objType = typeof (obj);
  if (obj === undefined || obj === null) {
    throw new TypeError()
  }
  if (objType === 'number' || objType === 'boolean') {
    return []
  }
  console.log(Object.keys(obj))
  for (const k of Object.keys(obj)) {
    resule.push([k, obj[k]])
  }
  return resule
}
console.log(entries(obj)) // [ [ 'A', 'hy' ], [ 'B', 12 ] ]