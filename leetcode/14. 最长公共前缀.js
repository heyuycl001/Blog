// 14. 最长公共前缀

/* 
编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。

示例 1：
输入：strs = ["flower","flow","flight"]
输出："fl"

示例 2：
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
/* var longestCommonPrefix = function (strs) {
  if (!strs.length || !strs[0].length) return "";
  let str = strs[0],
    sum = "",
    sum1 = "";
  for (let i = 0; i < str.length; i++) {
    sum = str[i];
    if (i > 0) sum1 += str[i - 1];
    for (let j = 0; j < strs.length; j++) {
      if (strs.length == 1) return strs[0];
      if (strs[j][i] !== sum) {
        return sum1;
      }
    }
  }
  return sum1 + sum;
};

let str = ["flower", "flower", "flower", "flower"];
console.log(longestCommonPrefix(str)); */

var longestCommonPrefix = function (strs) {
  if (strs === null || strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  let min = 0,
    max = 0;
  for (let i = 1; i < strs.length; i++) {
    if (strs[min] > strs[i]) min = i;
    if (strs[max] < strs[i]) max = i;
  }
  for (let j = 0; j < strs[min].length; j++) {
    if (strs[min].charAt(j) !== strs[max].charAt(j)) {
      return strs[min].substring(0, j);
    }
  }
  return strs[min];
};

let str = ["flower", "flow", "addad", "flight",'fdsfsd','ffsffs','fdasgd'];
console.log(longestCommonPrefix(str));
