// 面试题 01.02. 判定是否互为字符重排

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
/* var CheckPermutation = function (s1, s2) {
  if (s1.length !== s2.length) return false;
  // 利用js语言特性
  let arr2 = s2.split("");
  for (let i = 0; i < s1.length; i++) {
    if (!arr2.includes(s1[i])) {
      return false;
    } else {
      let temp = arr2.indexOf(s1[i]);
      arr2.splice(temp, 1);
    }
  }
  return true;
}; */

var CheckPermutation = function (s1, s2) {
  s1 = s1.split("").sort().join("");
  s2 = s2.split("").sort().join("");
  return s1 === s2;
};

console.log(CheckPermutation("abc", "bca"));
