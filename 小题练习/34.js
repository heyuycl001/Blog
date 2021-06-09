let parms = "abc12kaj234jfdalaj34djfj45fdafire55588jpds89";
let arr = [];

let fun = function () {
  str = parms.replace(/\d+/g, function () {
    let sum = arguments[0];
    arr.push(sum);
  });
  return arr;
};

console.log(fun());
