// 98. 验证二叉搜索树

/* 
给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
*/
const root = {
  val: 5,
  left: {
    val: 4,
    left: null,
    right: null,
  },
  right: {
    val: 6,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
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
 * @return {boolean}
 */

// var isValidBST = function (root) {
//   if (!root) return true;
//   if (root.left && root.left.val >= root.val) return false;
//   if (root.right && root.right.val <= root.val) return false;
//   return isValidBST(root.left) && isValidBST(root.right);
// };

var isValidBST = function (root, pre = null, next = null) {
  if (!root) return true;
  if (pre && pre.val >= root.val) return false;
  if (next && next.val <= root.val) return false;
  return isValidBST(root.left, pre, root) && isValidBST(root.right, root, next);
};

console.log(isValidBST(root));
