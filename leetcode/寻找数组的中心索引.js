/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let num = 0
  left = 0
  for (let i = 0; i < nums.length; i++) {
    num += nums[i]
  }
  for (let i = 0; i < nums.length; i++) {
    if (left === (num - nums[i]) / 2) {
      return i
    }
    left += nums[i]
  }
  return -1
};

pivotIndex([1, 7, 3, 6, 5, 6])