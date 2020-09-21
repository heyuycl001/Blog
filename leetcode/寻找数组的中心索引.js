/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  if (sum.length < 3) return -1
  let sum = nums.reduce((a, b) => a + b)
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === sum - nums[i] - leftSum) return i
    leftSum += nums[i]
  }
  return -1
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))