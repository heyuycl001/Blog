class Person {
    // 定义属性
    name: string
    age: number
    gender: string
    // 定义构造函数：实例化对象的时候，将属性进行初始化
    constructor(name: string, age: number, gender: string) {
        this.name = name
        this.age = age
        this.gender = gender
    }
    // 定义一般方法
    sayHi(str: string) {
        console.log('zz' + str)
    }
}

const person = new Person('hy', 18, 'xx')

person.sayHi('cc')
console.log(person.name, person.age, person.gender)


// 类的继承
class Animal {
    run(distance: number) {
        console.log(distance + 'm')
    }
}

class Dog extends Animal {
    cry() {
        console.log('wang! wang!')
    }
}

const dog = new Dog()
dog.run(100)
dog.cry()