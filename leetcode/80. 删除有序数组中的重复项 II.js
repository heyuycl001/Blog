// 80. 删除有序数组中的重复项 II

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let slow = 2,
    fast = 2;
  while (fast < nums.length) {
    if (nums[slow - 2] !== nums[fast]) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  // return slow;
  console.log(nums);
};

removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]);
