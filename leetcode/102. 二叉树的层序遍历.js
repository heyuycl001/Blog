// 102. 二叉树的层序遍历

/* 
给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。


示例：
二叉树：[3,9,20,null,null,15,7],
返回其层序遍历结果：
[
  [3],
  [9,20],
  [15,7]
]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
};
// [[1], [2, 2], [4, 3]];
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// var levelOrder = function (root) {
//   const result = [];
//   const helper = function (root, layer) {
//     if (!root) return;
//     if (!result[layer]) result[layer] = [];
//     result[layer].push(root.val);
//     helper(root.left, layer + 1);
//     helper(root.right, layer + 1);
//   };
//   helper(root, 0);
//   return result;
// };

/* var levelOrder = function (root) {
  if (!root || root.length < 1) return [];
  const result = [];
  let queue = [[root, 0]];
  while (queue.length) {
    let [curr, layer] = queue.pop();
    if (!result[layer]) result[layer] = [];
    if (curr) {
      result[layer].push(curr.val);
      if (curr.right) queue.push([curr.right, layer + 1]);
      if (curr.left) queue.push([curr.left, layer + 1]);
    }
  }
  return result;
};

console.log(levelOrder(root)); */

