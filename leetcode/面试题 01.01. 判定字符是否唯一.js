// 面试题 01.01. 判定字符是否唯一

/**
 * @param {string} astr
 * @return {boolean}
 */
/* var isUnique = function (astr) {
  const map = new Map();
  for (let i = 0; i < astr.length; i++) {
    if (map.has(astr[i])) {
      return false;
    } else {
      map.set(astr[i], i);
    }
    console.log(map);
  }
  return true;
}; */

var isUnique = function (astr) {
  return new Set(astr).size === astr.length;
};

console.log(isUnique("leetcode"));
