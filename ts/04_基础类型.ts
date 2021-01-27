let isBoolean: boolean = false
isBoolean = true
console.log(isBoolean)

let isNumber: number = 10
isNumber = 20
console.log(isNumber)

let isString: string = 'zz'
isString = 'xx'
console.log(isString)

// ! 默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。
let isUndefined: undefined = undefined
let isUnll: null = null
console.log(isUndefined, isUnll)

// 数组
let isArray: number[] = [1, 2, 3]
let isArray1: string[] = ['1', '2', '3']
let isArray2: Array<number> = [1, 2, 3]
let isArray3: Array<string> = ['1', '2', '3']

// 元组 Tuple
let isTuple: [number, string] = [1, '2']

// 枚举
enum Color {
    Red,
    Green,
    Blue
}
let myColor: Color = Color.Green

console.log(myColor, Color.Red, Color.Blue)

enum Color1 {
    Red = 1,
    Green = 2,
    Blue
}
console.log(Color1.Red, Color1.Green, Color1.Blue)
let myColor1: string = Color1[2]
console.log(myColor1)

// any
let notSure: any = 1
notSure = '1'
notSure = true
console.log(notSure)
let list: any = [1, '2', true]
console.log(list)

// void
// ! 当函数没有返回值，你通常会见到其返回值类型是void
function fn(): void {
    console.log('fn()')
}
// ! 声明一个 void 类型的变量没什么用，因为他只能赋值 undefined | null
let isVoid: void = undefined

// object
function fn2(obj: object): object {
    return {}
}
fn2(String)

// 联合类型
function fn3(x: number | string): string {
    return x.toString()
}

// 类型断言
/*
类型断言(Type Assertion): 可以用来手动指定一个值的类型
语法:
    方式一: <类型>值
    方式二: 值 as 类型  tsx中只能用这种方式
*/
function fn4(x: number | string) {
    if ((<string>x).length) {
        return (x as string).length
    } else {
        return x.toString().length
    }
}
console.log(fn4('abcd'), fn4(1234))

// 类型推断
// 1. 定义变量时赋值了, 推断为对应的类型.
let b9 = 10 // ! 不能将类型“string”分配给类型“number”
// b9 = '10' 
// 2. 定义变量时没有赋值, 推断为any类型
let b10; // ! 变量 "b10" 隐式具有 "any" 类型，但可以从用法中推断出更好的类型。
b10 = 10
b10 = '10'