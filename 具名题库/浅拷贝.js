//  除去对象的方法 {...}、Object.assign()、
//  除去数组的方法 [...]、concat()、slice()

// 剩下的方式如何实现浅拷贝呢？

const target = { a: { b: 1 } };

const shallowClone = function (target) {
  if (typeof target !== "object" || target === null) return target;
  const newObj = Array.isArray(target) ? [] : {};
  for (const prop in target) {
    if (target.hasOwnProperty(prop)) {
      newObj[prop] = target[prop];
    }
  }
  return newObj;
};

console.log(shallowClone(target));
