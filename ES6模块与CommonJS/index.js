let v = require('./common')

console.log(v.count) // 1
console.log(v.printCount()) // 2
console.log(v.count) // 1

console.log(v.obj.name) // hy
v.obj.name = 'ycl'
console.log(v.obj.name) // ycl