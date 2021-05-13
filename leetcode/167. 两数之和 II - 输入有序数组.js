// 167. 两数之和 II - 输入有序数组

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
/* var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1];
      }
    }
  }
}; */

// 利用双指针
var twoSum = function (numbers, target) {
  let i = 0,
    n = numbers.length - 1;
  while (i < n) {
    if (numbers[i] + numbers[n] === target) {
      return [i + 1, n + 1];
    }
    numbers[i] + numbers[n] > target ? i++ : n--;
  }
};

twoSum([2, 7, 11, 15], 9);
