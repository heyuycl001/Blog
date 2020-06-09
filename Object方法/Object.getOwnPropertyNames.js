const obj = {
  name: 'h',
  sex: 1,

}

Object.defineProperty(obj, 'age', {
  value: 11
})
Object.defineProperty(obj, 'a', {
  value: 2
})
Object.defineProperty(obj, 'b', {
  value: 5
})
obj.stature = 110

const result = Object.getOwnPropertyNames(obj)

console.log(result) // [ 'name', 'sex', 'age', 'a', 'b', 'stature' ]

const arr = ['a', 'b', 'c']

console.log(Object.getOwnPropertyNames(arr)) // ["0", "1", "2", "length"]

// 类数组对象
const arrObj = {
  0: 'a',
  1: 'b',
  2: 'c'
}

console.log(Object.getOwnPropertyNames(arrObj)) //[ '0', '1', '2' ]

//不可枚举属性
var my_obj = Object.create({}, {
  getFoo: {
    value: function () {
      return this.foo;
    },
    enumerable: false
  }
});
my_obj.foo = 1;

console.log(Object.getOwnPropertyNames(my_obj)) // [ 'getFoo', 'foo' ]