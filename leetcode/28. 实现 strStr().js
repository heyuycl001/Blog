// 28. 实现 strStr()

/* 
实现 strStr() 函数。
给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

示例 1:
输入: haystack = "hello", needle = "ll"
输出: 2

示例 2:
输入: haystack = "aaaaa", needle = "bba"
输出: -1
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
//! js 方法用indexOf 其实能解决这个问题..
/* var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
}; */
let haystack = "hello",
  needle = "ll";
// console.log(strStr(haystack, needle));

// ! 其他
// ! 这种方式每次会进行needle 全匹配
/* var strStr = function (haystack, needle) {
  if (!needle) return 0;
  let h = haystack.length;
  let n = needle.length;
  for (let i = 0; i < h - n + 1; i++) {
    if (haystack.substring(i, i + n) === needle) {
      return i;
    }
  }
  return -1;
}; */

// ! 双指针，每次匹配一个字符
var strStr = function (haystack, needle) {
  let h = haystack.length;
  let n = needle.length;
  let i = 0,
    j = 0;
  while (i < h - n + 1 && j < needle.length) {
    if (haystack[i + j] === needle[j]) {
      j++;
    } else {
      j = 0;
      i++;
    }
  }
  return j === needle.length ? i : -1;
};
console.log(strStr(haystack, needle));
