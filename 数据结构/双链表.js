/**
 * node
 */
var Node = function (val) {
    this.val = val
    this.next = null
    this.prev = null
}


/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
    this.head = null
    this.tail = null
    this.length = 0
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index > this.length - 1) return -1
    let i = 0,
        cur = this.head
    while (i < index) {
        cur = cur.next
        i++
    }
    return cur.val
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const node = new Node(val)
    const head = this.head
    if (this.length === 0) {
        this.head = node
        this.tail = node
    } else {
        this.head.prev = node
        this.head = node
        this.head.next = head
    }
    this.length++
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const node = new Node(val)
    if (this.length === 0) {
        this.head = node
        this.tail = node
    } else {

        node.prev = this.tail
        this.tail.next = node
        this.tail = node
    }
    this.length++
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.length) return;
    if (index <= 0) {
        this.addAtHead(val)
        return
    }
    if (index === this.length) {
        this.addAtTail(val)
        return
    }

    let node = new Node(val),
        i = 0,
        prev = null,
        cur = this.head

    while (i < index) {
        prev = cur
        cur = cur.next
        i++
    }
    prev.next = node
    node.next = cur
    node.prev = prev
    this.length++
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index > this.length - 1) return;

    if (index === 0) {
        if (this.head.next) {
            this.head.next.prev = null
            this.head = this.head.next
        } else {
            this.head = null
            this.tail = null
        }

        this.length--
        return
    }

    let i = 0,
        prev = null,
        cur = this.head
    while (i < index) {
        prev = cur
        cur = cur.next
        i++
    }
    console.log(prev, 'prev')
    console.log(cur, 'cur')
    // cur.next.prev = cur.prev
    // prev.next = cur ? cur.next : null
    if (index === this.length - 1) {
        this.tail = prev
        prev.next = null
    }else{
        prev.next = cur.next
        cur.next.prev = prev
    }
    this.length--
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

var obj = new MyLinkedList()
// obj.addAtTail(0)
// obj.addAtTail(1)
obj.addAtHead(2)
obj.deleteAtIndex(1)
obj.addAtHead(2)
// // console.log(obj.get(1))
obj.addAtHead(7)
obj.addAtHead(3)
obj.addAtHead(2)
obj.addAtHead(5)
obj.addAtTail(5)
// obj.get(5)
obj.deleteAtIndex(6)
obj.deleteAtIndex(4)
console.log(obj)
// ["addAtTail","get","addAtHead","addAtIndex","addAtHead"]

// 5=>2=>3=>7=>2=>2=>5
