class Node { // 节点
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkedList { // 链表
  constructor() {
    this.head = null
    this.end = null
    this.length = 0
  }


  // 在末尾添加节点
  addEndNode (val) {
    // 添加的是第一个节点
    const newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.end = newNode
    } else { // 末尾添加
      this.end.next = newNode
      this.end = newNode
    }
    this.length++
  }

  // 在开头添加节点
  addHeadNode (val) {
    const newNode = new Node(val)
    newNode.next = this.head
    this.head = newNode
    if (this.length === 0) {
      this.end = newNode
    }
    this.length++
  }

  // 根据index 查找链表
  findIndexList (index) {
    if (index > this.length - 1 || index < 0) return -1
    let i = 0,
      cur = this.head;
    while (i < index) {
      cur = cur.next
      i++
    }
    return cur.val
  }

  // 删除末尾的节点
  deleteEndNode () {
    if (this.length === 1) { // 如果length 为1 证明只有一个节点删除后就没了，需要重置end
      this.end = null
      this.head = null
    } else {
      let i = 0,
        cur = this.head,
        prev = null;
      while (i < this.length - 1) {
        prev = cur
        cur = cur.next
        i++
      }
      prev.next = null
      this.end = prev
    }
    this.length--
  }
  // 删除开头的节点
  deleteHeadNode () {
    if (this.length === 1) { // 如果length 为1 证明只有一个节点删除后就没了，需要重置end
      this.end = null
      this.head = null
    } else {
      this.head = this.head.next
    }
    this.length--
  }

  // 根据index添加节点(添加在index之前)
  addIndexNode (index, val) {
    const newNode = new Node(val)
    // index > this.length - 1
    if (this.length <= 0 || index === 0) { // 原链表无节点或者 在首位添加节点
      this.addHeadNode(val)
    } else if (index >= this.length) {
      this.addEndNode(val)
    } else {
      let i = 0,
        cur = this.head,
        prev = null;
      while (i < index) {
        prev = cur
        cur = cur.next
        i++
      }
      prev.next = newNode
      newNode.next = cur
      this.length++
    }
  }

  // 根据index删除节点
  deleteIndexNode (index) {
    if (this.length === 1 || index === 0) { // 只有一个或者index为0，删除开头的元素即可
      this.deleteHeadNode()
    } else if (index >= this.length - 1) { // 删除末尾即可
      this.deleteEndNode()
    } else {
      let i = 0,
        cur = this.head,
        prev = null;
      while (i < index) {
        prev = cur
        cur = cur.next
        i++
      }
      prev.next = cur.next
      this.length--
    }
  }
}

const linkedList = new LinkedList()

linkedList.addEndNode(1)
linkedList.addEndNode(2)
linkedList.addHeadNode(0)
linkedList.addEndNode(3)
linkedList.addEndNode(4)
linkedList.addEndNode(5)
linkedList.addEndNode(6)
console.log(linkedList.findIndexList(1))
linkedList.deleteEndNode()
linkedList.deleteEndNode()
linkedList.deleteHeadNode()
linkedList.deleteHeadNode()
linkedList.addIndexNode(3, 6)
linkedList.addIndexNode(2, 6)
linkedList.deleteIndexNode(0)

console.log(JSON.stringify(linkedList))