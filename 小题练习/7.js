var obj = {
  bar: function () {
    return this.baz
  },
  baz: 1
};
(function () {
  console.log(typeof arguments[0]())
})(obj.bar)

/**
 * undefined
 *
 * 解析，函数谁执行this就是谁，此时this是arguments，里面没有baz所以为undefined
 */