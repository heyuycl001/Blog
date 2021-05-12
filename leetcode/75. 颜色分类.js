// 75. 颜色分类

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// ! 两次循环一次调整0(红色)，一次调整1(白色)，剩下的就是2(蓝色)
/* var sortColors = function (nums) {
  let n = nums.length;
  let ptr = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      let temp = nums[i];
      nums[i] = nums[ptr];
      nums[ptr] = temp;
      ptr++;
    }
  }
  for (let i = ptr; i < n; i++) {
    if (nums[i] === 1) {
      let temp = nums[i];
      nums[i] = nums[ptr];
      nums[ptr] = temp;
      ptr++;
    }
  }
}; */

// 利用双指针，减少一次循环
var sortColors = function (nums) {
  let n = nums.length;
  let p0 = 0;
  let p1 = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      let temp = nums[i];
      nums[i] = nums[p1];
      nums[p1] = temp;
      p1++;
    } else if (nums[i] === 0) {
      let temp = nums[i];
      nums[i] = nums[p0];
      nums[p0] = temp;
      if (p0 < p1) {
        temp = nums[i];
        nums[i] = nums[p1];
        nums[p1] = temp;
      }
      p0++;
      p1++;
    }
  }
};

sortColors([2, 0, 2, 1, 1, 0]);
