// 189. 旋转数组

/* 
给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

进阶：
尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？

输入: nums = [1,2,3,4,5,6,7], k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]

示例 2:
输入：nums = [-1,-100,3,99], k = 2
输出：[3,99,-1,-100]
解释: 
向右旋转 1 步: [99,-1,-100,3]
向右旋转 2 步: [3,99,-1,-100]
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 使用js api完成
/* 
var rotate = function (nums, k) {
  k = k % nums.length;
  if (nums.length === k) return nums;
  let tail = nums.splice(k * -1, k);
  nums.unshift(...tail);
};
let arr = [1, 2, 3, 4, 5, 6, 7];
rotate(arr, 13); 
*/

// 使用额外空间
/* 
var rotate = function (nums, k) {
  let len = nums.length;
  let newArr = [];
  for (let i = 0; i < len; i++) {
    newArr[(k + i) % len] = nums[i];
  }
  for (let i = 0; i < len; i++) {
    nums[i] = newArr[i];
  }
};
let arr = [1, 2, 3, 4, 5, 6, 7];
rotate(arr, 2); 
*/

// 不使用额外空间
var rotate = function (nums, k) {
  if (nums.length <= 1) return nums;
  k = k % nums.length;
  let len = nums.length - 1;
  // 旋转整个数组
  reverse(0, len, len / 2);
  reverse(k, len, (len - k) / 2);
  reverse(0, k - 1, k / 2);
  /**
   * @param {number} start // 从start旋转
   * @param {number} end   // 到end截止
   * @param {number} count // 旋转次数
   */
  function reverse(start, end, count) {
    for (let i = 0; i < count; i++) {
      [nums[start + i], nums[end - i]] = [nums[end - i], nums[start + i]];
    }
  }
  console.log(nums);
};
let arr = [1];
rotate(arr, 3);
