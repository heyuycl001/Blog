const Promise1 = new Promise((res, rej) => {
  console.log(Promise1)
  setTimeout(() => {
    res('foo')
    console.log('foo2')
  }, 300);
})
Promise1.then((value) => {
  console.log(value)
})


console.log(typeof Promise1)