// 88. 合并两个有序数组

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// ! 双指针 创建两个尾指针
// ! m + n - 1 是result数组的尾部
// ! 比较两个数组尾部  谁大就放到 m + n - 1 ，然后递减
/* 
var merge = function (nums1, m, nums2, n) {
  let needle1 = m - 1;
  let needle2 = n - 1;
  let len = m + n - 1;
  while (needle2 >= 0) {
    nums1[len--] =
      nums1[needle1] > nums2[needle2] ? nums1[needle1--] : nums2[needle2--];
  }
  return nums1;
}; 
*/
// ! 双指针，创建两个头指针
// ! 创建一个result 额外的数组空间
// ! 循环 对比两个数组的大小，小的放进去result，指针+1
var merge = function (nums1, m, nums2, n) {
  let needle1 = 0;
  let needle2 = 0;
  let result = new Array(m + n).fill(0);
  while (needle1 < m || needle2 < n) {
    console.log(nums1[needle1], "==========>", needle1);
    console.log(nums2[needle2], "<=========", needle2);
    if (needle1 === m) {
      result[needle1 + needle2] = nums2[needle2];
      needle2++;
    } else if (needle2 === n) {
      result[needle1 + needle2] = nums1[needle1];
      needle1++;
    } else if (nums1[needle1] < nums2[needle2]) {
      result[needle1 + needle2] = nums1[needle1];
      needle1++;
    } else if (nums1[needle1] > nums2[needle2]) {
      result[needle1 + needle2] = nums2[needle2];
      needle2++;
    } else {
      result[needle1 + needle2] = nums2[needle2];
      needle2++;
    }
  }
  return result;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
