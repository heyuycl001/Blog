let arr1 = [1, 2, 3, 4, {
  name: 'hh'
}]
/******************浅克隆**********************/

// 1,展开运算符
let arr2 = [...arr1]

// 2.splice
let arr3 = arr1.splice(0)


/******************深克隆**********************/
// 1.基于JSON方法，先把原始对象转换为字符串，再把字符串重新定义为对象。此时实现了内存的深度拷贝、
// 缺点：如果对象中的某一项是正则或者函数，基于JSON.parse 和 JSON.stringify处理后，就不再是正则(变为空对象)或者函数了(null)
let arr4 = JSON.parse(JSON.stringify(arr1))

/**
 * 
function _type(value) {
  return Object.prototype.toString.call(value)
}
function _deepClone(obj) {
  if (obj === null) return null
  if (typeof obj !== 'object') return obj
  // 如果是正则
  if (_type(obj) === '[object RegExp]') return new RegExp(obj)
  // 如果是日期
  if (_type(obj) === '[object Date]') return new Date(obj)
  let newObj = new obj.constructor

  for (let key in obj) {
    if (!obj.hasOwnProperty(key)) break;
    newObj[key] = _deepClone(obj[key])
  }

  return newObj
}
 * 
 */



/******************深克隆**********************/

function _type(value) {
  return Object.prototype.toString.call(value)
}

// 必须保证obj 是数组或者是对象等可以克隆的
function _deepClone(obj) {
  let newObj = new obj.constructor
  for (let key in obj) {
    if (!obj.hasOwnProperty(key)) break;
    let item = obj[key],
      itemType = _type(item)

    if (item !== null && typeof item === 'object') { // 如果他是对象类型的，就继续调用
      // 如果是对象类型，还需要判断是否是正则或者日期对象
      if (/(RegExp|Date)/.test(itemType)) { // 正则判断 是否包含正则或者日期时间
        newObj[key] = new item.constructor(item)
        continue;
      }

      newObj[key] = _deepClone(obj[key])
      continue;
    }
    // 如果不是对象，直接赋值
    newObj[key] = obj[key]
  }

  return newObj
}

let obj = {
  arr: [1, 2, 3, 4, 5],
  obj2: {
    name: 1,
    age: {
      value: 2
    }
  }
}
const NObj = _deepClone(obj)
console.log(NObj.obj2)
console.log(NObj.obj2.age === obj.obj2.age)