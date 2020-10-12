function test () {
  function fn () { }
  fn.toString = () => {
    console.log('toString()')
    return 'toString'
  }

  return fn
}


console.log(test())