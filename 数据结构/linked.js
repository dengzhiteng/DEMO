// 链表
/* 链表节点类 */
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);       // 节点值
    this.next = (next === undefined ? null : next); // 指向下一节点的引用
  }
}