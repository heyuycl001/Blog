console.log(1);

setTimeout(() => {
  console.log(2);
}, 3000);

setTimeout(() => {
  console.log(3);

  setTimeout(() => {
    console.log(4);
  }, 1000);
}, 1000);

console.log(5);

let a = {
  name: "Julia",
  age: 20
};
function change(o) {
  o.age = 24;
  o = {
    name: "Kath",
    age: 30
  };
  return o;
}
let b = change(a);
console.log(b.age); // 第一个console
console.log(a.age); // 第二个console
