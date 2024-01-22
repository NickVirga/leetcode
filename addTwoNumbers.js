/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const l1node3 = new ListNode(3);
const l1node2 = new ListNode(4, l1node3);
const l1node1 = new ListNode(2, l1node2);

const l2node3 = new ListNode(4);
const l2node2 = new ListNode(6, l2node3);
const l2node1 = new ListNode(5, l2node2);

const addTwoNumbers = function (l1, l2) {
  let sum = 0;
  let carry = 0;
  const result = new ListNode();
  let nextNode = result;
  while (l1 || l2 || carry) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    nextNode.next = new ListNode();
    nextNode = nextNode.next;
    if (sum >= 10) {
      nextNode.val = sum - 10;
      carry = 1;
    } else {
      nextNode.val = sum;
      carry = 0;
    }

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return result.next;
};

console.log(addTwoNumbers(l1node1, l2node1));

