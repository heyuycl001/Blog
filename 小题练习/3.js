console.log(a)
a()
var a = 3
function a () {
  console.log(10)
}

console.log(a)

a = 6
a()

/**
 * function:a
 * 10
 * 3
 * a is not a function
 */