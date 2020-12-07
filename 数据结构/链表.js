class Node {
    constructor(element) {
        this.val = element
        this.next = null
    }
}

class MyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    get(index) { // 获取链表中第 index 个节点的值。如果索引无效，则返回-1。
        if (index < 0 || index > this.length - 1) return -1
        let i = 0,
            cur = this.head
        while (i < index) {
            cur = cur.next
            i++
        }
        return cur.val
    }
    addAtHead(val) { // 在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
        const head = this.head
        const newNode = new Node(val)
        this.head = newNode
        this.head.next = head
        // 判断链表的length 是否 大于 0
        if (this.length === 0) {
            this.tail = newNode
        }
        this.length++
    }
    addAtTail(val) { // 将值为 val 的节点追加到链表的最后一个元素。
        const newNode = new Node(val)
        // 判断链表的length 是否 大于 0
        if (this.length == 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length += 1
    }
    addAtIndex(index, val) { // 在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
        if (index > this.length) return;
        if (index === this.length) { // 在链表末尾添加
            this.addAtTail(val)
            return
        }
        if (index <= 0) { // 在链表开头加
            this.addAtHead(val)
            return
        }
        let i = 0,
            prev = null, // 上一个节点
            cur = this.head, // 当前节点
            newNode = new Node(val) // 要插入的节点
        while (i < index) {
            prev = cur
            cur = cur.next
            i++
        }
        prev.next = newNode
        newNode.next = cur
        this.length += 1
    }
    deleteAtIndex(index) { // 如果索引 index 有效，则删除链表中的第 index 个节点。
        if (index < 0 || index > this.length - 1) return -1
        if (index === 0) { // 删除第一个元素 , this.head = this.head.next        
            this.head = this.head.next
            this.length--
            return;
        }
        let i = 0,
            prev = null, // 上一个节点
            cur = this.head // 当前节点
        while (i < index) {
            prev = cur
            cur = cur.next
            i++
        }
        prev.next = cur ? cur.next : null
        if (index === this.length - 1) { // 如果是最后一个元素 需重置末尾元素
            this.tail = prev
        }
        this.length--
    }
}

const myLinkedList = new MyLinkedList()

myLinkedList.addAtHead(2)
myLinkedList.deleteAtIndex(1)
myLinkedList.addAtHead(2)
myLinkedList.addAtHead(7)
myLinkedList.addAtHead(3)
myLinkedList.addAtHead(2)
myLinkedList.addAtHead(5)
myLinkedList.addAtTail(5)
console.log(myLinkedList.get(5))
myLinkedList.deleteAtIndex(6)
myLinkedList.deleteAtIndex(4)

// myLinkedList.addAtTail(10)
// myLinkedList.addAtTail(20)
// myLinkedList.addAtTail(30)
// myLinkedList.addAtTail(40)
// myLinkedList.addAtHead(2)
// myLinkedList.addAtHead(1)
// myLinkedList.deleteAtIndex(0)
// myLinkedList.addAtIndex(1, 3)
// myLinkedList.addAtIndex(0, 1)

console.log(myLinkedList)
console.log(JSON.stringify(myLinkedList))