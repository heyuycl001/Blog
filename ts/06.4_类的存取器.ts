(() => {
    // ! 存取器:让我们可以有效的控制对 对象的成员的访问，通过 getter 和 setter来进行操作

    class Person {
        firstName: string
        lastName: string
        constructor(firstName: string, lastName: string) {
            this.firstName = firstName
            this.lastName = lastName
        }

        // 读取器
        get fullName() {
            return this.firstName + this.lastName
        }
        // 修改器 => 
        set fullName(val) {
            let names = val.split('_')
            this.firstName = names[0]
            this.lastName = names[1]
        }
    }

    const person = new Person('zz', 'xx')
    console.log(person.fullName)
    person.fullName = '诸葛_孔明'
    console.log(person.firstName, person.lastName)
})()