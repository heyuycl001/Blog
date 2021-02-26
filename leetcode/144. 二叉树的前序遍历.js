// 144. 二叉树的前序遍历

/* 
给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

示例 1：
输入：root = [1,null,2,3]
输出：[1,2,3]

示例 2：
输入：root = []
输出：[]

示例 3：
输入：root = [1]
输出：[1]
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

var preorderTraversal = function (root) {
  let result = [];

  const preorder = (root) => {
    if (root) {
      result.push(root.val);

      root.left && preorder(root.left);
      root.right && preorder(root.right);
    }
  };
  preorder(root);
  return result;
};

/* 
var preorderTraversal = function (root) {
  let result = [];
  let stack = [];
  if (root) stack.push(root);
  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.val);

    node.right && stack.push(node.right);

    node.left && stack.push(node.left);
  }

  return result;
}; 
*/

console.log(preorderTraversal(root));
