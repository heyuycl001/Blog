// 206. 反转链表

/* 
反转一个单链表。


示例:
输入: null<-1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
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
// var reverseList = function (head) {
//     // 递归算法会导致开辟多个reverseList执行栈
//     if (!head || !head.next) return head
//     let next = head.next
//     let reverse = reverseList(next)
//     console.log('next', next)
//     console.log('head', head)
//     head.next = null
//     next.next = head
//     // { val: 6, next: { val: 5, next: null } }
//     // { val: 5, next: { val: 4, next: null } }
//     // { val: 4, next: { val: 3, next: null } }
//     // { val: 3, next: { val: 2, next: null } }
//     // { val: 2, next: { val: 1, next: null } }
//     return reverse
// };

// var reverseList = function (head) {
//     let reverse = (prev, cur) => {
//         if (!cur) return prev
//         let next = cur.next
//         cur.next = prev
//         return reverse(cur, next)
//     }
//     return reverse(null, head)
// };


var reverseList = function (head) {
    // 设置一个前指针，一个推进指针，推进直到cur为空，返回prev
    // 步骤
    // 节点1 指向null
    // 节点2 指向节点1
    let cur = head,
        prev = null;
    // 输入: 1->2->3->4->5->NULL
    // 输出: 5->4->3->2->1->NULL
    while (cur) {
        console.log(cur)
        let cHead = cur.next
        cur.next = prev // 节点1 指向 null ...
        prev = cur // { val: 1, next:null}...
        cur = cHead
    }
    return prev
}; 

console.log(JSON.stringify(reverseList({
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
})))