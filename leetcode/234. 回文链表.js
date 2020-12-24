// 234. 回文链表

/* 
请判断一个链表是否为回文链表。

示例 1:
输入: 1->2
输出: false

示例 2:
输入: 1->2->2->1
输出: true
*/

//1. 把链表遍历一遍并储存数组，然后转字符串 判断 字符串 === 反转后的字符串嘛
// 缺点： 额外占用了 O(n)的内存
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var isPalindrome = function (head) {
//     let arr = []
//     while (head) {
//         arr.push(head.val)
//         head = head.next
//     }
//     return arr.join(',') === arr.reverse().join(',')
// };

// isPalindrome({
//     val: 1,
//     next: {
//         val: 2,
//         next: {
//             val: 3,
//             next: {
//                 val: 4,
//                 next: {
//                     val: 5,
//                     next: {
//                         val: 6,
//                         next: null
//                     }
//                 }
//             }
//         }
//     }
// })

// 2. 利用双指针找到链表的中心位置，然后反转后半部分，然后逐一对比
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (head == null) return true;

    let fast = head, // 快
        slow = head; // 慢
    while (fast.next && fast.next.next) {
        fast = fast.next.next
        slow = slow.next
    }

    const reverseEndList = reverseList(slow.next);

    let p1 = head,
        p2 = reverseEndList,
        flag = true
    while (flag && p2) {
        if (p2.val != p1.val) flag = false
        p2 = p2.next
        p1 = p1.next
    }
    // 拼上原先链表
    slow.next = reverseList(reverseEndList)
    return flag
};

var reverseList = function (head) {
    let prev = null,
        curr = head;
    while (curr) {
        let cHead = curr.next
        curr.next = prev //1 => null
        prev = curr
        curr = cHead
    }
    return prev;
}
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
                    next: {
                        val: 6,
                        next: null
                    }
                }
            }
        }
    }
}
isPalindrome(obj)

console.log(JSON.stringify(obj))