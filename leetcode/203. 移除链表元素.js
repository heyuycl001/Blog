// 203. 移除链表元素

/* 
删除链表中等于给定值 val 的所有节点。

示例:
输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    // 删除链表节点的分析
    // 1. 找到当前要删除节点的上一个节点 
    // 2. 将上一个节点指向当前被删节点的下一个节点
    // 3. 主要是否删除的是第一个跟最后一个
    // 4. ...
    // const nNode = new ListNode()
    // nNode.next = head
    // 请注意，head 中的 0 节点， 是为了模拟空节点。
    let prev = head,
        cur = head.next;
    while (cur) {
        if (cur.val === val) {
            prev.next = cur.next
        } else {
            prev = prev.next
        }
        cur = cur.next
    }
    return head.next
};



console.log(removeElements({
    val: 0,
    next: {
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
    }
}))