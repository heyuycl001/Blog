// 215. 数组中的第K个最大元素

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/* var findKthLargest = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1; j++) {
      if (nums[j] < nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums[k - 1];
}; */

var findKthLargest = function (nums, k) {
  nums = quickSort(nums);
  return nums[k - 1];
};
var quickSort = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }
  const pivotIndex = Math.floor(nums.length / 2);
  const pivot = nums.splice(pivotIndex, 1)[0];
  let left = [],
    right = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      right.push(nums[i]);
    } else {
      left.push(nums[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
};

findKthLargest([3, 2, 1, 5, 6, 4], 2);
