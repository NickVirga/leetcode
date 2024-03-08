/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  const listNode1 = new ListNode
  for (let val1 in list1) {
    listNode1.val = val1
    listNode1.next 
  }

  const output = [];
  let node1 = list1;
  let node2 = list2;

  while (node1.next || node2.next) {
    if (node1.val < node2.val) {
      output.push(node1.val);
    } else {
      output.push();
    }
  }
};
