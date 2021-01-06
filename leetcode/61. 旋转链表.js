// 61. 旋转链表

/* 
给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。


示例 1:
输入: 1->2->3->4->5->NULL, k = 2
输出: 4->5->1->2->3->NULL
解释:
向右旋转 1 步: 5->1->2->3->4->NULL
向右旋转 2 步: 4->5->1->2->3->NULL

示例 2:
输入: 0->1->2->NULL, k = 4
输出: 2->0->1->NULL
解释:
向右旋转 1 步: 2->0->1->NULL
向右旋转 2 步: 1->2->0->NULL
向右旋转 3 步: 0->1->2->NULL
向右旋转 4 步: 2->0->1->NULL
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */


// var rotateRight = function (head, k) {
//     let f = head,
//         s = head
//     while (k--) {
//         f = f && f.next ? f.next : head
//     }

//     if (s === f) return head

//     while (f.next) {
//         f = f.next
//         s = s.next
//     }
//     f.next = head
//     head = s.next
//     s.next = null

//     return head
// };


var rotateRight = function (head, k) {
    if (!head) return null
    // 先把链表首尾连接
    let curr = head,
        n = 0
    while (++n && curr.next) {
        curr = curr.next
    }
    curr.next = head
    k = k % n
    while (++k < n) {
        head = head.next
    }
    let tem = head
    tem = tem.next
    head.next = null
    return tem
};


const obj = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
}
rotateRight(obj, 2)