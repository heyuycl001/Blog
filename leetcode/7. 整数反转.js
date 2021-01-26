//7. 整数反转
/* 
给你一个 32 位的有符号整数 x ，返回 x 中每位上的数字反转后的结果。
如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
假设环境不允许存储 64 位整数（有符号或无符号）。

示例 1：
输入：x = 123
输出：321

示例 2：
输入：x = -123
输出：-321

示例 3：
输入：x = 120
输出：21

示例 4：
输入：x = 0
输出：0
*/

/**
 * @param {number} x
 * @return {number}
 */
/* 
    ! 思路： 635 % 10 = 5
    ! 635 / 10 向下取整 得 63
    ! 63 % 10 = 3
    ! 63 / 10 向下取整得 6
    ! 6 % 10 = 6
    ! 拼一起得 536
*/
var reverse = function (x) {
  let ord = Math.abs(x);
  let now = 0;
  while (ord > 0) {
    now = now * 10 + (ord % 10);
    ord = Math.floor(ord / 10);
  }
  if (x > 0) {
    return now <= Math.pow(2, 31) ? now : 0;
  } else {
    return now <= Math.pow(2, 31) ? -now : 0;
  }
};

console.log(reverse(-635));
