// 53. 最大子序和

/**
 * @param {number[]} nums
 * @return {number}
 */
// ! 两次循环，把所有的可能都加一遍，然后对比那个大，返回大的。
/* var maxSubArray = function (nums) {
  // if (nums.length === 1) return nums[0];
  let result = Number.MIN_SAFE_INTEGER,
    sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum > result) result = sum;
    }
  }
  return result;
}; */

// ! 按顺序相加如果结果小于等于0则 放弃这几个数，继续往后加，直到最后，输入最大的结果。
var maxSubArray = function (nums) {
  let pre = 0, // 新的和
    maxAns = nums[0]; // 最大和
  for (let i = 0; i < nums.length; i++) {
    pre = Math.max(nums[i], pre + nums[i]);
    maxAns = Math.max(maxAns, pre);
  }
  return maxAns;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
