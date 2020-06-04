// 深冻结

let obj = {
  internal: {
    name: "Y",
    final: {
      name: 'H'
    }
  }
}

deepFreeze = (obj) => {
  var propNames = Object.getOwnPropertyNames(obj);
  propNames.forEach(function (name) {
    var prop = obj[name];
    if (typeof prop == 'object' && prop !== null) {
      deepFreeze(prop);
    }
  });
  Object.freeze(obj);
}

// deepFreeze(obj)
// obj.internal.name = 'H'
// obj.internal.final.name = 'Y'
// console.log(obj)

deepFreeze1 = (obj) => {
  var prop, propName
  Object.freeze(obj)
  for (propName in obj) {
    prop = obj[propName]
    if (!obj.hasOwnProperty(propName) || !(typeof prop === "object") || Object.isFrozen(prop)) {
      // 跳过原型链上的属性和已冻结的对象.
      continue
    }
    deepFreeze1(prop)
  }
}
// deepFreeze1(obj)
// obj.internal.name = 'H'
// obj.internal.final.name = 'Y'
// console.log(obj)



// Object.freeze()冻结的是值，你仍然可以将变量的引用替换掉。
obj = {
  name: 'HH'
}
console.log(obj)