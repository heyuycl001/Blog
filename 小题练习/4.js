var a = function fn (sum) {
  fn = sum
  console.log(typeof fn)
}
a(1)
console.log(typeof fn())

/**
 * function
 * a is not a function
 */