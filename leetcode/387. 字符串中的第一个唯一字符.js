// 387. 字符串中的第一个唯一字符

/* 
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

示例：
s = "leetcode"
返回 0

s = "loveleetcode"
返回 2
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const obj = {};
  let i = 0;
  for (let i = 0; i < s.length; i++) {
    const zi = s[i];
    if (obj[zi]) {
      obj[zi]++;
    } else {
      obj[zi] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar("leetcode"));
