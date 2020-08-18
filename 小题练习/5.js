function Fn (a) {
  this.a = a
}
Fn.prototype.a = 30
Fn.prototype.init = function () {
  console.log(this.a)
}
var s = new Fn(20)
s.init()

/**
 * 20
 */