let obj = {
  foo: 123
}

const property = Object.getOwnPropertyDescriptor(obj, 'foo')

console.log(property) // { value: 123, writable: true, enumerable: true, configurable: true }

let o, d;

o = {
  get foo() {
    return 9
  }
}

d = Object.getOwnPropertyDescriptor(o, 'foo')

console.log(d)
// {
//   get: [Function: get foo],
//   set: undefined,
//   enumerable: true,
//   configurable: true
// }