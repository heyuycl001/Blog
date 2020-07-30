// Object.values()
// 返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用 for...in循环的顺相同。（区别在于for-in循环会枚举原型链中的属性）

// 描述
/**
  object.values()返回一个数组，其元素是在对象上找到的可枚举属性值。属性的顺序与通过手动循环对象的属性值所给出的顺序相同。
 */

// 示例
var obj = { foo: 'bar', baz: 42 }
console.log(Object.values(obj)) // [ 'bar', 42 ]

// 像数组对象
var obj1 = { 0: 'a', 1: 'b', 2: 'c' }
console.log(Object.values(obj1)) // [ 'a', 'b', 'c' ]

// 像这种随机排序的数组对象
var an_obj = { 100: 'a', 2: 'b', 7: 'c' }
console.log(Object.values(an_obj)) // [ 'b', 'c', 'a' ]

// getFoo是不可枚举属性
var my_obj = Object.create({}, { getFoo: { value: 111 } });
my_obj.foo = 'bar';
console.log(Object.values(my_obj)); // ['bar']

// 字符串
console.log(Object.values('foo')); // ['f', 'o', 'o']