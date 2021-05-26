// 面试题 10.01. 合并排序的数组

/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */

// 借用 额外的数组 两个指针比大小，谁小 放进去
/* var merge = function (A, m, B, n) {
  let pa = 0,
    pb = 0;
  const sorted = new Array(m + n).fill(0);
  let cur = 0;
  while (pa < m || pb < n) {
    if (pa === m) {
      cur = B[pb++];
    } else if (pb === n) {
      cur = A[pa++];
    } else if (A[pa] < B[pb]) {
      cur = A[pa++];
    } else {
      cur = B[pb++];
    }
    sorted[pa + pb - 1] = cur;
  }
     for (let i = 0; i != m + n; ++i) {
        A[i] = sorted[i];
    }
}; */

// 原地
// 两个尾指针比大小，最大的放在 A数组的最后？
var merge = function (A, m, B, n) {
  let maxLength = m + n - 1;
  let left = m - 1,
    right = n - 1;
  // console.log(maxLength);
  while (right >= 0) {
    if (A[left] > B[right]) {
      A[maxLength] = A[left--];
    } else {
      A[maxLength] = B[right--];
    }
    maxLength--;
  }
  console.log(A);
};

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([0], 0, [1], 1);
