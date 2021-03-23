// 101. 对称二叉树

/* 
给定一个二叉树，检查它是否是镜像对称的。
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
    left: null,
    right: {
      val: 4,
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
// 递归
/* var isSymmetric = function (root) {
  const check = (left, right) => {
    if (left === right) return true;
    if (left && right) {
      return (
        left.val === right.val &&
        check(left.left, right.right) &&
        check(left.right, right.left)
      );
    }   
    return false
  };
  return check(root.left, root.right);
}; */

// 利用栈来记录比较的过程
var isSymmetric = function (root) {
  const stack = [root.left, root.right];
  while (stack.length) {
    let right = stack.pop();
    let left = stack.pop();
    if (left && right) {
      if (left.val !== right.val) return false;
      stack.push(left.left, right.right, left.right, right.left);
    } else if (left || right) {
      return false;
    }
  }
  return true;
};

console.log(isSymmetric(root));
