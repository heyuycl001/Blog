//430. 扁平化多级双向链表

/* 
多级双向链表中，除了指向下一个节点和前一个节点指针之外，它还有一个子链表指针，可能指向单独的双向链表。这些子列表也可能会有一个或多个自己的子项，依此类推，生成多级数据结构，如下面的示例所示。
给你位于列表第一级的头节点，请你扁平化列表，使所有结点出现在单级双链表中。

示例 2：
输入：head = [1,2,null,3]
输出：[1,3,2]
解释：
输入的多级列表如下图所示：
  1---2---NULL
  |
  3---NULL
*/

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    let list = head
    while (list) {
        if (list.child) {
            const tail = list.next // 储存后续链表
            const child = flatten(list.child)
            list.next = child // 将多级链表进行拼接
            // child.prev = list // prev 的指向

            list.child = null // 将 list的 child 为空
            let end = child
            while (end.next) { // 因为需要知道下一级链表的尾部跟上一级相接
                end = end.next
            }
            end.next = tail  // 相接
            tail && (tail.prev = end)
        }
        list = list.next
    }
    return head
};
const list2 = {
    val: 11,
    child: null,
    next: {
        val: 12,
        child: null,
        next: null
    }
}

const list1 = {
    val: 7,
    child: null,
    next: {
        val: 8,
        child: list2,
        next: {
            val: 9,
            child: null,
            next: {
                val: 10,
                child: null,
                next: null
            }
        }
    }
}

const list = {
    val: 1,
    child: null,
    next: {
        val: 2,
        child: null,
        next: {
            val: 3,
            child: list1,
            next: {
                val: 4,
                child: null,
                next: {
                    val: 5,
                    child: null,
                    next: {
                        val: 6,
                        child: null,
                        next: null
                    }
                }
            }
        }
    }
}


console.log(JSON.stringify(flatten(list)))