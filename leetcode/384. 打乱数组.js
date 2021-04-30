// 384. 打乱数组

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let arr = [...this.nums];
  for (let i = 0; i < this.nums.length; i++) {
    let cache = arr[i],
      index = Math.floor(Math.random() * arr.length);
    arr[i] = arr[index];
    console.log(arr, 1);
    arr[index] = cache;
    console.log(arr, 2);
  }
  return arr;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
const nums = [1, 2, 3];
var obj = new Solution(nums);
var param_1 = obj.reset();
var param_2 = obj.shuffle();
console.log(param_2);
