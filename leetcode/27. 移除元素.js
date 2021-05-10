// 27. 移除元素

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/* var removeElement = function (nums, val) {
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[left] = nums[i];
      left++;
    }
  }
  return left;
}; */

var removeElement = function (nums, val) {
  let left = 0,
    right = nums.length;
  for (left; left < right; left++) {
    if (nums[left] === val) {
      nums[left] = nums[right - 1];
      left--;
      right--;
    }
  }
  return left;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
