// 138. 复制带随机指针的链表

/* 
给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。
要求返回这个链表的 深拷贝。 
我们用一个由 n 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 [val, random_index] 表示：
val：一个表示 Node.val 的整数。
random_index：随机指针指向的节点索引（范围从 0 到 n-1）；如果不指向任何节点，则为  null 。


示例 1：
输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]

示例 2：
输入：head = [[1,1],[2,1]]
输出：[[1,1],[2,1]]

示例 3：
输入：head = [[3,null],[3,0],[3,null]]
输出：[[3,null],[3,0],[3,null]]

示例 4：
输入：head = []
输出：[]
解释：给定的链表为空（空指针），因此返回 null。
*/



/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) return head
    let cur = head
    let node = new Node()
    let temp = node
    let map = new Map()
    while (cur) {
        temp.val = cur.val
        temp.next = cur.next ? new Node() : null
        map.set(cur, temp)
        cur = cur.next
        temp = temp.next
    }
    cur = head
    temp = node
    while (cur) {
        temp.random = cur.random ? map.get(cur.random) : null
        temp = temp.next
        cur = cur.next
    }
    return node
};

const list = {
    val: 7,
    next: {
        val: 13,
        next: {
            val: 11,
            next: {
                val: 10,
                next: {
                    val: 1,
                    next: null,
                    random: 0
                },
                random: 2
            },
            random: 4
        },
        random: 0
    },
    random: null
}

copyRandomList(list)