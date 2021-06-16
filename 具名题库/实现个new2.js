function Person() {
  this.name = "Jack";
}
var p = new Person();
console.log(p.name); // Jack

// 创建一个新对象
// 将this指向新对象并且并传递参数
// 将新对象的原型指向搞糟函数的prototype
// 判断构造函数的返回值是否是引用类型，是就返回这个引用类型，不是咋返回新对象
function _new() {
  const obj = {};
  const _args = [].shift.call(arguments);
  const result = _args.apply(obj, arguments);
  obj.__proto__ = Person.prototype;

  return typeof result === "object" ? result : obj;
}

const p1 = _new(Person);

console.log(p1.name);
