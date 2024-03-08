/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    
    let cnt = 1

    let node = head

    while (node.next) {
        
        node = node.next
        cnt++
    }

    let index = 1
    node = head
    while (index < (cnt + 1)/2) {

        node = node.next
        index++
    }

    return node

};


var middleNode1 = function(head) {
    
    let slow = head
    let fast = head
    
    while (fast !== null && fast.next !== null) {
        
        slow = slow.next
        fast = fast.next.next
        
    }

    return slow

};