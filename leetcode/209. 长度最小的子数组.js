// 209. 长度最小的子数组

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let start = 0,
    end = 0,
    sum = 0,
    len = Number.MAX_SAFE_INTEGER;
  while (start < nums.length || end < nums.length) {
    if (sum < target && end !== nums.length) {
      sum += nums[end];
      end++;
      if (sum >= target) {
        len = len < end - start ? len : end - start;
      }
    } else if (sum >= target || start !== nums.length) {
      sum -= nums[start];
      start++;
      if (sum >= target) {
        len = len < end - start ? len : end - start;
      }
    }
  }
  console.log(len === Number.MAX_SAFE_INTEGER ? 0 : len);
  return len === Number.MAX_SAFE_INTEGER ? 0 : len;
};

minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]);
