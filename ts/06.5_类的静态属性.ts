(() => {
    // ! 静态成员: 在类中通过 static 修饰符的属性和方法，那么就是静态的属性和方法，也称之为静态成员
    // ? 静态成员在使用的时候通过类名.这种语法来调用的

    class Person {
        static name1: string = "小甜甜"
        constructor() {
        }

        static sayHi() {
            console.log('萨瓦迪卡')
        }
    }

    // const person: Person = new Person()
    // console.log(person.name1)
    // Person.sayHi()
    // ? 可以读取
    console.log(Person.name1)
    // ? 可以修改
    Person.name1 = 'zz'
    console.log(Person.name1)
    Person.sayHi()
})()