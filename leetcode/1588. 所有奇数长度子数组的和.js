// 1588. 所有奇数长度子数组的和

/**
 * @param {number[]} arr
 * @return {number}
 */

var sumOddLengthSubarrays = function (arr) {
  let len = arr.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += arr[i];
    for (let j = i + 1; j < len; j++) {
      if ((j - i) % 2 == 0) {
        for (let k = j; k >= i; k--) {
          sum += arr[k];
        }
      }
    }
  }
  return sum;
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
