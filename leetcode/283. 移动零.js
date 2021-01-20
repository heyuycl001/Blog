// 283. 移动零

/* 
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/* 
todo:双指针
var moveZeroes = function (nums) {
  let i = 0,
    j = 0;
  while (i < nums.length) {
    if (nums[i] === 0) {
      i++;
    } else {
      nums[j] = nums[i];
      i++;
      j++;
    }
  }
  while (j < nums.length) {
    nums[j] = 0;
    j++;
  }
  return nums
}; 
*/
var moveZeroes = function (nums) {
  let i = 0,
    j = 0;
  // todo: 以j为界，不等于0则交换位置。
  while (i < nums.length) {
    if (nums[i] != 0) {
      let next = nums[i];
      nums[i] = nums[j];
      nums[j] = next;
      j++;
    }
    i++;
  }
};

let arr = [0, 2, 1];
moveZeroes(arr);
