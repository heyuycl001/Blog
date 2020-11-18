// 父类
function SuperType(name) {
    this.name = name || 'SuperType'
    this.colors = ['red', 'blue', 'green'];
}
SuperType.prototype.days = '今晚不回家'
SuperType.prototype.sayName = function () { // 父类原型方法
    return this.name;
};
// 子类
function SubType() {}


// 原型链继承
// 子类的原型 = 父类的实例
// 优点:
//    1. 实现了继承，继承了父类的模版，有继承了父类的原型对象
// 缺点:
//    1. 创建子类实例时，无法向父类构造函数传参 (没有实现super)
//    2. 来自于原型上的属性被所有实例共享
//    3. 修改父类引用类型变量会影响到所有子类实例


/**
 * SubType.prototype = new SuperType()
 * const subType1 = new SubType()
 * 
 * console.log(subType1.colors) // [ 'red', 'blue', 'green' ]
 * console.log(subType1.sayName()) // SuperType
 * 
 * // 修改父类引用类型变量会影响到所有子类实例
 * subType1.colors.push('yellow') 
 * const subType1_1 = new SubType() 
 * console.log(subType1_1.colors) // [ 'red', 'blue', 'green', 'yellow' ]
 * 
 * // 实例即是子类的实例，又是父类的实例
 * console.log(subType1_1 instanceof SubType) // true
 * console.log(subType1_1 instanceof SuperType) // true
 */





// 构造函数继承
// 在子类构造函数里面执行父类构造函数
// 优点:
//    1. 创建子类的时候可以向父类传参数
//    2. 修改父类引用类型属性不会影响所有子类
// 缺点:
//    1. 实例并不是父类的实例，只是子类的实例
//    2. 只能继承父类的属性和方法，不能继承父类原型上的属性和方法。
//    3. 无法做到函数复用，每个子类都有一个父类的副本(都执行了一遍父类)，影响性能
/**
 * function SubType() {
 *     SuperType.call(this, 'SubType')
 * }
 * const subType2 = new SubType()
 * 
 * // 只能继承父类的属性和方法，不能继承原型上的属性和方法
 * console.log(subType2.sayName()) // subType2.sayName is not a function
 * console.log(subType2.colors) // [ 'red', 'blue', 'green' ]
 * console.log(subType2.name) // SubType
 * 
 * // 引用类型的属性变化，不会影响所有子类
 * subType2.colors.push('yellow')
 * const subType2_1 = new SubType()
 * console.log(subType2_1.colors) // [ 'red', 'blue', 'green' ]
 * 
 * // 实例只是子类的实例，并不是父类的实例
 * console.log(subType2_1 instanceof SubType); // true
 * console.log(subType2_1 instanceof SuperType); // false
 */