// 父类
function SuperType() {
    this.colors = ['red', 'blue', 'green'];
}
// 子类
function SubType() {}


// 原型链继承
// 子类的原型 = 父类的实例
// 优点：
//    1. 实现了继承，继承了父类的模版，有继承了父类的原型对象
// 缺点:
//    1. 创建子类实例时，无法向父类构造函数传参 (没有实现super)
//    2. 来自于原型上的属性被所有实例共享
//    3. 修改父类引用类型变量会影响到所有子类实例
SubType.prototype = new SuperType()

const subType1 = new SubType()
console.log(subType1.colors.push())

