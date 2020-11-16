// 父类
function SuperType() {
    this.colors = ['red', 'blue', 'green'];
}
// 子类
function SubType() {}



// 原型链继承
// 子类的原型 = 父类的实例
SubType.prototype = new SuperType()

const subType1 = new SubType()
console.log(subType1.colors.push())