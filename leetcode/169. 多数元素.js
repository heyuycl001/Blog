// 169. 多数元素

/**
 * @param {number[]} nums
 * @return {number}
 */
/* var majorityElement = function (nums) {
  nums = nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
}; */

var majorityElement = function (nums) {
  let count = 1;
  m = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      m = nums[i];
    }
    if (m === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return m;
};
console.log(majorityElement([3, 2, 3]));
