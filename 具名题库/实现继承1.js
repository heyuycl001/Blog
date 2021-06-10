// 父类
function SuperType(name) {
  this.name = name || "SuperType";
  this.colors = ["red", "blue", "green"];
}
SuperType.prototype.days = "今晚不回家";
SuperType.prototype.sayName = function () {
  // 父类原型方法
  return this.name;
};

// ! 原型链继承
// function SubType() {}

// const G = (SubType.prototype = new SuperType("光仔"));

// const G1 = new SubType();

// G.colors.push("光仔");
// console.log(G.name, G.colors);
// console.log(G1.name, G.colors);
// console.log(G1.sayName())

// ! 构造函数继承
// function SubType(name) {
//   SuperType.call(this, name);
// }

// const G = new SuperType("光仔");
// const G1 = new SubType("光仔");

// G.colors.push("光仔");
// console.log(G.name);
// console.log(G1.name);
// console.log(G.colors);
// console.log(G1.colors);
// console.log(G1.sayName());

// ! 组合继承
// function SubType(name) {
//   SuperType.call(this, name);
// }
// SubType.prototype = new SuperType();

// const G = new SuperType("光仔");
// const G1 = new SubType("光仔");

// G.colors.push("光仔");
// console.log(G.name);
// console.log(G1.name);
// console.log(G.colors);
// console.log(G1.colors);
// console.log(G1.sayName());

// 寄生组合继承
function SubType(name) {
  SuperType.call(this, name);
}
SubType.prototype = Object.create(SuperType.prototype);
SubType.prototype.constructor = SubType;

const G = new SuperType("光仔");
const G1 = new SubType("光仔");

G.colors.push("光仔");
console.log(G.name);
console.log(G1.name);
console.log(G.colors);
console.log(G1.colors);
console.log(G1.sayName());
