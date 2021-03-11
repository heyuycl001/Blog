// 145. 二叉树的后序遍历

/* 
给定一个二叉树，返回它的 后序 遍历。

示例 1：
输入：root = [1,null,2,3]
输出：[1,2,3]
*/

const root = {
  val: 1,
  left: null,
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

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var postorderTraversal = function (root) {
  const result = [];
  const postorder = (root) => {
    if (root) {
      root.left && postorder(root.left);
      root.right && postorder(root.right);
      result.push(root.val);
    }
  };
  postorder(root);
  return result
};


/* 
var postorderTraversal = function (root) {
  const result = [],
    stack = [];
  let node = null;

  if (root) stack.push(root);
  while (stack.length) {
    node = stack.pop();
    result.unshift(node.val);
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }
  return result;
}; 
*/

console.log(postorderTraversal(root));
