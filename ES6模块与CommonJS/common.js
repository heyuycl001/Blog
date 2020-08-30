var count = 1
var obj = {
  name: 'hy'
}
var printCount = function () {
  return ++count
}

module.exports = {
  printCount,
  count,
  obj
}

