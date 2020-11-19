let arr = [1, 1, "1", "1", null, null, undefined, undefined, /a/, /a/, NaN, NaN, {}, {}, {
        name: 'hy'
    },
    [],
    []
]

// 数组去重。
// 目前最流行的 new Set()
const res = [...new Set(arr)]
console.log(res); // 可以看出引用数据类型并没有去重
/* [
    1, '1',
    null, undefined,
    /a/, /a/,
    NaN, {},
    {},
    [],
    []
] */

// 经典方法，创建一个新数组，indexof判断
const res1 = []
for (let i = 0; i < arr.length; i++) {
    if (res1.indexOf(arr[i]) === -1) {
        res1.push(arr[i])
    }
}
console.log(res1) // 可以看出引用数据类型并没有去重 NaN也没去重
/* [
    1, '1',
    null, undefined,
    /a/, /a/,
    NaN, NaN, {}, {},
    [], []
] */

// 其他方法 filter 、 reduce
const res2 = arr.filter((item, index) => {
    return arr.indexOf(item) === index
})
console.log(res2) // 可以看出引用数据类型并没有去重
/* [1, '1', null, undefined, /a/, /a/, {}, {},
    [],
    []
] */

const res3 = arr.reduce((pre, cur) => {
    return pre.includes(cur) ? pre : [...pre, cur]
}, [])
console.log(res3) // 可以看出引用数据类型并没有去重
/* [
    1, '1',
    null, undefined,
    /a/, /a/,
    NaN, {}, {}, [],
    []
] */


// 如何解决这个问题 
// 把数组中的每一项，转换为对象，利用对象属性名不能重复去重，引用数据类型会自动执行toString()
// 会有缺陷，所有对象只能留下一个
const obj = {}
const res4 = arr.filter(item => {
    console.log(typeof item + item);
    if (obj.hasOwnProperty(typeof item + item)) {
        return false
    } else {
        obj[typeof item + item] = true
        return true
    }
})
console.log(res4)
/* [1, '1', null, undefined, /a/, NaN, {},
    []
] */


[{
    name: 'hy'
}, {
    age: '12',
    name: 'hy'
}, {
    age: '14'
}, {
    name: 'zp'
}, {
    age: '12',
    name: 'zp'
}, {
    age: '12',
    name: 'hy'
}, {
    fn: /\sd/,
    name: 'zp'
}, {
    fn: /\sd/,
    name: 'zp'
}, {
    fn: {},
    name: 'zp'
}]