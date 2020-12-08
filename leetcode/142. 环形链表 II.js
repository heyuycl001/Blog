// 142. 环形链表 II

/* 
给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。

示例 1：
输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。


示例 2：
输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。


示例 3：
输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。
 

提示：
链表中节点的数目范围在范围 [0, 104] 内
-105 <= Node.val <= 105
pos 的值为 -1 或者链表中的一个有效索引
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
 * @return {ListNode}
 */
// var detectCycle = function (head) {
//     let map = new Map()
//     while (head) {
//         if (!map.has(head)) {
//             map.set(head, true);
//         } else {
//             return head
//         }
//         head = head.next
//     }
//     return null
// };



var detectCycle = function (head) {
    let k = head,
        m = head;
    while (k) {
        if (!k.next) return null
        k = k.next.next
        m = m.next
        if (k === m) { // 证明有环
            k = head
            while (true) {
                if (k === m) return m
                k = k.next
                m = m.next
            }
        }
    }
    return null
};

/* 
    假设 A 为入环处 ，B 为相交处
    a 是 head到A的距离
    b 是 A-B的距离
    C 是 A-B反方向的距离
假设 超过1圈就相遇了
    那么：
    m = a+b
    k = a+b+c+b
    已经 k 是 m 速度的 2 倍 
    得出 a + b = c + b
    得出 a = c
    所以 在第一次相遇出 把 k 重置 为 head 
    然后 k、m 相同速度走，会在 入环处相遇


假设 超过 n 圈才相遇
    k = a + b + bn + cn
    k = a + (n+1)b + cn
    a + b + nb + cn = 2a + 2b
    a - 2a = 2b - (b + bn + cn)
    -a = b - bn - cn
    a = bn + cn - b
    a = (b + c)n - b
    a = (n - 1)(b + c) + c
因此可以得出 a到入环的距离 = 第一次相遇的距离到入环的距离
*/