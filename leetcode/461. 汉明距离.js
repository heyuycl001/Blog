// 461. 汉明距离

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  x = x.toString(2);
  y = y.toString(2);
  // console.log(x, y);
  let mexLength = Math.max(x.length, y.length);
  // console.log(mexLength);
  x = x.padStart(mexLength, 0);
  y = y.padStart(mexLength, 0);
  // console.log(x, y);
  let ans = 0;
  for (let i = 0; i < mexLength; i++) {
    if (x[i] !== y[i]) ans++;
  }
  return ans;
};

console.log(hammingDistance(1, 4));
