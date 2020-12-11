// 328. 奇偶链表

/* 
给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。
请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。

示例 1:
输入: 1->2->3->4->5->NULL
输出: 1->3->5->2->4->NULL

示例 2:
输入: 2->1->3->5->6->4->7->NULL 
输出: 2->3->6->7->1->5->4->NULL

说明:
应当保持奇数节点和偶数节点的相对顺序。
链表的第一个节点视为奇数节点，第二个节点视为偶数节点，以此类推。
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
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    // 输入: 1->2->3->4->5->NULL
    // 输出: 1->3->5->2->4->NULL
    let evenHead = head.next, // 偶数链的头
        odd = head, //  奇数节点指针
        even = evenHead; // 偶数节点指针

    while (even && even.next) {
        odd.next = even.next // 将奇数节点的下一个 指向 偶数节点的下一个 (这不还是奇数节点吗)
        odd = odd.next // 推动 odd 到 下一个节点 3... (上一步不是刚指向的吗)
   

        even.next = odd.next // 将偶数节点的下一个 指向 奇数节点的下一个 3=>4(上一步刚换的)
        even = even.next // 推动 odd 到 下一个偶数节点 4.... 
    }

    odd.next = evenHead
    return head
};




console.log(JSON.stringify(oddEvenList({
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: {
                        val: 6,
                        next: null
                    }
                }
            }
        }
    }
})));