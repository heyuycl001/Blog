// 278. 第一个错误的版本

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    for (let i = 0; i < n.length; i++) {
      if (isBadVersion(i)) {
        return i;
      }
    }
  };
};

// ! 这道题莫名其妙的，不做过分解释。
// ! 因为此题的解答方法是 顺序的，从0-n，所以可用二分查找

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let i = 0,
      j = n;
    while (i <= j) {
      const mid = i + Math.floor((j - i) / 2);
      if (isBadVersion(mid)) {
        j = mid - 1;
      } else {
        i = mid + 1;
      }
    }
    return i;
  };
};
