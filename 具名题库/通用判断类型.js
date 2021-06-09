// Object.prototype.toString.call()

const getType = function (obj) {
  console.log(Object.prototype.toString.call(obj));
  return Object.prototype.toString
    .call(obj)
    .replace(/^\[object (\S+)\]$/, "$1");
};
getType([]);
