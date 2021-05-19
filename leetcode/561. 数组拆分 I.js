// 561. 数组拆分 I

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }
  console.log(sum);
  return sum;
};

arrayPairSum([1, 4, 3, 2]);
