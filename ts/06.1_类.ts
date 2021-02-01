// ! 多态
(() => {
    class Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }

        sayHi(sum: string = '5') {
            console.log(this.name + sum)
        }
    }

    class Dog extends Animal {
        constructor(name: string) {
            super(name)
        }
        sayHi(sum: string = '10') {
            console.log(this.name + sum)
        }
    }

    class Pig extends Animal {
        constructor(name: string) {
            super(name)
        }
        sayHi(sum: string = '20') {
            console.log(this.name + sum)
        }
    }
    // ! 多态
    const animal: Animal = new Animal('zz')
    const dog: Dog = new Dog('xx')
    const pig: Pig = new Pig('cc')

    animal.sayHi()
    dog.sayHi()
    pig.sayHi()

    const dog1: Animal = new Dog('xx')
    const pig1: Animal = new Pig('cc')
    dog1.sayHi()
    pig1.sayHi()
})()