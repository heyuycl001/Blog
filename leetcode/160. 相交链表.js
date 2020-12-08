// 160. 相交链表

/* 
编写一个程序，找到两个单链表相交的起始节点。


示例 1：
输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出：Reference of the node with value = 8
输入解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。

示例 2：
输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
输出：Reference of the node with value = 2
输入解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。

示例 3：
输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
输出：null
输入解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
解释：这两个链表不相交，因此返回 null。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// var getIntersectionNode = function (headA, headB) {
//     if (!headA || !headB) return null
//     let A = headA,
//         B = headB;
//     while (A !== B) {
//         A = A === null ? headB : A.next
//         B = B === null ? headA : B.next
//     }
//     return A
// };
/* 
a1 a2 c1 c2 c3 b1 b2 b3 c1 c2 c3
b1 b2 b3 c1 c2 c3 a1 a2 c1 c2 c3

a + c + b = b + c + a
*/



var getIntersectionNode = function (headA, headB) {
    const map = new Map();
    while (headA) {
        map.set(headA)
        headA = headA.next
    }
    while (headB) {
        if (map.has(headB)) return headB
        headB = headB.next
    }
};