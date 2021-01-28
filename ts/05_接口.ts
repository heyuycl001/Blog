/*
! 需求: 创建人的对象, 需要对人的属性进行一定的约束

! id是number类型, 必须有, 只读的
! name是string类型, 必须有
! age是number类型, 必须有
! sex是string类型, 可以没有
*/

interface IPerson {
    readonly id: number,
    name: string,
    age: number,
    sex?: string
}

const person1: IPerson = {
    id: 10,
    name: 'zz',
    age: 18
}


// 函数类型
interface IsearchFunc {
    (source: string, subString: string): boolean
}

const searchString: IsearchFunc = function (source: string, sub: string): boolean {
    return source.search(sub) > -1
}

// 类类型
interface IFiy {
    fiy(): any
}
interface Right {
    lightOn(): void;
    lightOff(): void;
}

class Person1 implements IFiy {
    fiy() {
        console.log('我要飞')
    }
}

class Person2 implements IFiy, Right {
    fiy() {
        console.log('我要飞')
    }
    lightOn() {
        console.log('开')
    }
    lightOff() {
        console.log('关')
    }
}

const person2 = new Person1()
const person3 = new Person2()
person2.fiy()
person3.fiy()
person3.lightOff()
person3.lightOn()


// 接口继承接口

interface LightableAlarm extends IFiy, Right {

}

/* class Person3 implements LightableAlarm {
    // ! 类型“Person3”缺少类型“LightableAlarm”中的以下属性: fiy, lightOn, lightOff
} */