(() => {
    /* 
        ! 类中的成员都有自己的默认的访问修饰符 public
        ! public 修饰符 ，类中的成员默认的修饰符，代表公共的，任意位置都可以访问该成员
        ! private 修饰符，类中的成员如果使用private修饰符，那么外部是无法访问这个成员的，当然子类中也是无法访问的
        ! protected 修饰符，外部是无法访问该成员，只能在父类及其子类中访问。
    */
    class Person {
        // 属性
        public name: string
        // 构造函数
        public constructor(name: string) {
            this.name = name
        }
        // 方法
        public eat() {
            console.log('漂亮，真漂亮！')
        }
    }
    // 实例化对象
    const person = new Person('zz')
    console.log(person.name)
    person.eat()

    class Student extends Person {
        constructor(name: string) {
            super(name)
        }
        play() {
            console.log(this.name)
        }
    }
})()