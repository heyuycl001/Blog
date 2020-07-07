// Object.keys(obj) // 方法会返回一个由给定对象的自身可枚举属性组成的数组，数组中的属性名的排列顺序和正常循环遍历该对象时返回一样

// 描述
// Object.keys 返回一个所有元素为字符串的数组。其元素来自于从给定的object上面可直接枚举的属性。属性的顺序跟手动遍历对象属性时一致

var arr = ['a', 'b', 'c']
console.log(Object.keys(arr)) // ['0','1','2']

var obj = {
  0: 'a',
  1: 'b',
  2: 'c'
}
console.log(Object.keys(obj)) // ['0','1','2']

var anObj = {
  100: 'a',
  2: 'b',
  7: 'c'
}
console.log(Object.keys(anObj)) // [ '2', '7', '100' ]

var myObj = Object.create({}, {
  getFoo: {
    // enumerable: true, // 如果为true 就是可枚举属性 默认为false 不可枚举
    value: function () {
      return this.foo
    }
  }
})
myObj.foo = 1
console.log(Object.keys(myObj)) // [ 'foo' ]