// 面试题 08.03. 魔术索引

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === i) {
      return i;
    }
  }
  return -1;
};

findMagicIndex([0, 2, 3, 4, 5]);
