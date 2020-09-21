setTimeout(() => console.log('a'), 0);
var p = new Promise((resolve) => {
  console.log('b');
  resolve();
});
p.then(() => console.log('c'));
p.then(() => console.log('d'));
console.log('e');
async function async1 () {
  console.log("a");
  await async2();
  console.log("b");
}
async function async2 () {
  console.log('c');
}
console.log("d");
setTimeout(function () {
  console.log("e");
}, 0);
async1();
new Promise(function (resolve) {
  console.log("f");
  resolve();
}).then(function () {
  console.log("g");
});
console.log('h');

// b
// e
// d
// a
// c
// f
// h
// c
// d
// b
// g
// a
// e