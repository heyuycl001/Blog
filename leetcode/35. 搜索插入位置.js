// 35. 搜索插入位置

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 直接循环
/* var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (target < nums[i]) {
      return i;
    }
  }
}; */
// 题目是给定一个排序数组.. 思考一下是否可用二分呢
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return left;
};

console.log(searchInsert([1, 3, 5, 6], 7));
