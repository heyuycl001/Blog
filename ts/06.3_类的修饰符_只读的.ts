(() => {
    // ! readonly关键字，无法分配到 "xx" ，因为它是只读属性。修饰后该成员就不能在修改
    // !
    /*    class Person {
           // readonly name: string
           name: string = "大甜甜"
           constructor() {
           }
   
           sayHi() {
               console.log(this.name)
           }
       }
   
       const person = new Person()
       console.log(person.name)
       person.name = '小甜甜'
       console.log(person.name) */
    class Person {
        // ! 构造函数中的name参数，一旦使用了readonly修饰符，就会变成属性参数
        // ! 构造函数中的name参数，一旦使用了readonly修饰符，Person中就有了一个name的属性成员
        // ! 构造函数中的name参数，一旦使用了readonly修饰符，外部也是无法修改该属性
        
        // ! 构造函数中的name参数，一旦使用了public修饰符，那么内部就有了一个公共的属性成员了
        // ! private、protected.......
        constructor(public name = "大甜甜") {
        }

        sayHi() {
            console.log(this.name)
        }
    }

    const person = new Person('小甜甜')
    console.log(person.name)
})()