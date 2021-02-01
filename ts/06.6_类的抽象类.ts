(() => {
    // ! 抽象类：包含抽象方法（抽象方法一般没有任何的具体内容的实现），也可以包含实例方法，抽象类是不能被实例化的。
    // ? 为了让子类进行实例化及实现内部的方法
    // ! 抽象类的作用最终都是为了子类

    abstract class Animal {
        // 抽象方法
        abstract eat(): string

        // 实例方法
        sayHi() {
            console.log('你好啊')
        }
    }
    // 定义一个派生类
    class Dog extends Animal {
        // ! 重新实现抽象类中的方法，此时这个方法就是当前的Dog类的实例方法
        eat() {
            console.log('舔着吃')
            return '舔着吃'
        }
    }

    const dog: Dog = new Dog()
    console.log(dog.eat())

    // 调用的是抽象类的实例方法
    dog.sayHi()
})()