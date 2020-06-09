const a = {
  x: 100
}

const b = {
  x: 200
}

const obj = {}

obj[a] = 'h'
obj[b] = 'y'

console.log(obj) // { '[object Object]': 'y' }

console.log(obj[a]) // y
console.log(obj[b]) // y