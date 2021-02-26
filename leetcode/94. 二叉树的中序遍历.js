// 94. 二叉树的中序遍历
/* 
给定一个二叉树的根节点 root ，返回它的 中序 遍历。

示例 1：
输入：root = [1,null,2,3]
输出：[1,3,2]

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
/* 
var inorderTraversal = function (root) {
  let result = [];
  const inorder = (root) => {
    if (root) {
      root.left && inorder(root.left);
      result.push(root.val);
      root.right && inorder(root.right);
    }
  };
  inorder(root);
  return result;
}; 
*/

var inorderTraversal = function (root) {
  let result = [],
    stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    result.push(root.val);
    root = root.right;
  }
  console.log(result);
};

inorderTraversal(root);
