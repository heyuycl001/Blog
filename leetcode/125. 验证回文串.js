// 125. 验证回文串

/* 
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:
输入: "A man, a plan, a canal: Panama"
输出: true

示例 2:
输入: "race a car"
输出: false
*/
// ! 先把其他字符去掉
// ! 在判断 正 === 反
/* function isPalindrome(s) {
    let str = s.replace(/[^0-9a-zA-Z]/g,"").toLowerCase().split('');
    return str.join('') === str.reverse().join('');
}; */

function isPalindrome(s) {
  let str = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
  let i = 0,
    j = str.length - 1;
  while (i < j) {
    console.log(str[i], str[j], i);
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }
  return true;
}

const str = "race a car";
console.log(isPalindrome(str));
