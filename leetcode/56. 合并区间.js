// 56. 合并区间

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let arr = [];
  let cu = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (cu[1] >= intervals[i][0]) {
      cu[1] = Math.max(cu[1], intervals[i][1]);
    } else {
      arr.push(cu);
      cu = intervals[i];
    }
  }
  arr.push(cu);
  return cu;
};

merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
]);
