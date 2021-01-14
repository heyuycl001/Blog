// 350. 两个数组的交集 II

/* 
给定两个数组，编写一个函数来计算它们的交集。

示例 1：
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]

示例 2:
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[4,9]

说明：
输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
我们可以不考虑输出结果的顺序。

进阶：
如果给定的数组已经排好序呢？你将如何优化你的算法？
如果 nums1 的大小比 nums2 小很多，哪种方法更优？
如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/* 
var intersect = function (nums1, nums2) {
  let obj = {},
    arr = [];
  for (let i = 0; i < nums1.length; i++) {
    if (obj[nums1[i]] !== undefined) {
      obj[nums1[i]]++;
    } else {
      obj[nums1[i]] = 1;
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    let val = obj[nums2[i]];
    if (val > 0) {
      arr.push(nums2[i]);
      obj[nums2[i]]--;
    }
  }
  return arr
}; 
*/

var intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  // 双指针
  let s1 = 0,
    s2 = 0,
    res = [];
  while (s1 < nums1.length && s2 < nums2.length) {
    if (nums1[s1] === nums2[s2]) {
      res.push(nums2[s2]);
      s1++, s2++;
    } else {
      if (nums1[s1] > nums2[s2]) {
        s2++;
      } else {
        s1++;
      }
    }
  }
  console.log(res);
  return res;
};

let nums1 = [1, 2, 8, 3, 2, 1, 8, 5],
  nums2 = [1, 2, 3, 4, 8, 5, 8];
intersect(nums1, nums2);
