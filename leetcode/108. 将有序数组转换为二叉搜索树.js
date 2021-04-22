// 将有序数组转换为二叉搜索树

const nums = [-10, -3, 0, 5, 9];

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (!nums.length) return null;
  const mid = Math.floor(nums.length / 2);
  const peak = new TreeNode(nums[mid]);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid + 1, nums.length);
  peak.left = sortedArrayToBST(left);
  peak.right = sortedArrayToBST(right);
  return peak;
};

console.log(JSON.stringify(sortedArrayToBST(nums)));
