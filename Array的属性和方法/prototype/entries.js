/**
 * [].entries()
 * 返回一个新的Array Iterator 对象，该对象包含数组中每一个索引的键/值对。
 */

/**
 * demo
 */
const array1 = ['a', 'b', 'c']

console.log(array1.entries()) // Array Iterator {}
console.log(Array.from(array1.entries())) // [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]

const array2 = ['1', '2', '3']
const iterator = array2.entries();
console.log(iterator.next()) // { value: [ 0, '1' ], done: false }
console.log(iterator.next()) // { value: [ 1, '2' ], done: false }
console.log(iterator.next()) // { value: [ 2, '3' ], done: false }
console.log(iterator.next()) // { value: undefined, done: true }


const array3 = ['a', 'b', 'c']

const iterator1 = array3.entries();

for (let i of iterator1) {
  console.log(i)
  // [ 0, 'a' ]
  // [ 1, 'b' ]
  // [ 2, 'c' ]
}