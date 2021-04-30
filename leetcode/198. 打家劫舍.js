// 198. 打家劫舍

/**
 * @param {number[]} nums
 * @return {number}
 */
/* var rob = function (nums) {
  // 一个房子选一个
  // 两个房子选大的
  // 三个房子选最后一个，只能选第一个跟第三个；不选最后一个只能选第二个。
  // 四个房子选最后一个，只能选第一个或者第二个最大的;不选最后一个只能选第1个跟第三个
  // 得出公示
  // fn = Math.max(f(n-2)中最大的 + 最后一个房子, f(n-1)房子中最大的
  if (nums.length === 0) return 0;
  const dp = new Array(nums.length + 1);
  dp[0] = 0;
  dp[1] = nums[0];
  for (let i = 2; i <= nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1]);
  }
  return dp[nums.length];
}; */

var rob = function (nums) {
  // 一个房子选一个
  // 两个房子选大的
  // 三个房子选最后一个，只能选第一个跟第三个；不选最后一个只能选第二个。
  // 四个房子选最后一个，只能选第一个或者第二个最大的;不选最后一个只能选第1个跟第三个
  // 得出公示
  // fn = Math.max(f(n-2)中最大的 + 最后一个房子, f(n-1)房子中最大的
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let first = nums[0],
    second = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    let temp = second;
    second = Math.max(first + nums[i], second);
    first = temp;
  }
  return second;
};
console.log(rob([2, 7, 9, 3, 1]));
