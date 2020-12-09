//19. 删除链表的倒数第N个节点

/* 
给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：
给定一个链表: 1->2->3->4->5, 和 n = 2.
当删除了倒数第二个节点后，链表变为 1->2->3->5.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let k = head,
        m = head,
        i = 0;
    while (i < n) {
        k = k.next
        i++
    }
    if(!k)return head.next
    k = k.next
    while (k) {
        k = k.next
        m = m.next
    }
    m.next = m.next.next
    return head
};
removeNthFromEnd({
    val: 1,
    next: {
        val: 2,
        next: null
    }
}, 1)
/* 
 删除链表只需要知道删除节点的前一个节点
*/