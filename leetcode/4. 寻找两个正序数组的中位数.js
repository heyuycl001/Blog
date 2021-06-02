// 4. 寻找两个正序数组的中位数

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const numLen1 = nums1.length,
    numLen2 = nums2.length,
    arr = new Array(numLen1 + numLen2);
  let por1 = 0,
    por2 = 0;
  while (por1 < numLen1 && por2 < numLen2) {
    if (nums1[por1] < nums2[por2]) {
      arr[por1 + por2] = nums1[por1];
      por1++;
    } else {
      arr[por1 + por2] = nums2[por2];
      por2++;
    }
  }
  if (por1 !== numLen1) {
    for (por1; por1 < numLen1; por1++) {
      arr[por1 + por2] = nums1[por1];
    }
  } else {
    for (por2; por2 < numLen2; por2++) {
      arr[por1 + por2] = nums2[por2];
    }
  }
  if (arr.length % 2 == 0) {
    let r = arr.length / 2;
    return (arr[r] + arr[r - 1]) / 2;
  } else {
    return arr[Math.floor(arr.length / 2)];
  }
};

let nums1 = [1, 2, 5],
  nums2 = [3, 4, 5];

console.log(findMedianSortedArrays(nums1, nums2));
