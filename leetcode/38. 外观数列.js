// 38. 外观数列
/* 
给定一个正整数 n ，输出外观数列的第 n 项。
「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。

示例 1：
输入：n = 1
输出："1"
解释：这是一个基本样例。

示例 2：
输入：n = 4
输出："1211"
解释：
countAndSay(1) = "1"
countAndSay(2) = 读 "1" = 一 个 1 = "11"
countAndSay(3) = 读 "11" = 二 个 1 = "21"
countAndSay(4) = 读 "21" = 一 个 2 + 一 个 1 = "12" + "11" = "1211"
countAndSay(5) = 读 "1211" = 一 个 1 + 一 个 2 + 二 个 1 = "11" + "12" + "21" = ""
*/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let i = 1;
  let str = "1";
  while (i < n) {
    i++;
    str = str.replace(/(\d)\1*/g, (item) => `${item.length}${item[0]}`);
  }
  return str;
};

console.log(countAndSay(4));
