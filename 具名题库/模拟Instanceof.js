// Instanceof

function myInstanceof(left, right) {
  if (typeof left !== "object" || left === null) return false;

  let proto = Object.getPrototypeOf(left);
  while (proto) {
    if (proto === null) return false;
    if (proto === right.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}
console.log(myInstanceof([], Object));
