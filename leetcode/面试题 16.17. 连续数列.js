// 面试题 16.17. 连续数列

/**
 * @param {number[]} nums
 * @return {number}
 */

// 暴力循环所有。哪个大返回哪个。
/* var maxSubArray = function (nums) {
  let result = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum > result) result = sum;
    }
  }
  return result;
}; */

var maxSubArray = function (nums) {
  let sum = 0;
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i]);
    maxSum = Math.max(maxSum, sum);
  }
};

maxSubArray([-2, 5, -3, -4, -4, 4, -1, 2, 1, -5, 4]);
