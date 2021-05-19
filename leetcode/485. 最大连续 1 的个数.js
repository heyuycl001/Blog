// 485. 最大连续 1 的个数

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let count = 0,
    maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      maxCount = Math.max(count, maxCount);
      count = 0;
    }
  }
  maxCount = Math.max(count, maxCount);
  return maxCount;
};

findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]);
