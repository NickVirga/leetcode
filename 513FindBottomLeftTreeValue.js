/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {

    let leftmost = root[0]
    let row = 1
    let threshold = 1
    
    for (let i = 1; i <= root.length; i++) {
        
        if(i > threshold ) {
            row++
            threshold = threshold * 2
        }
        console.log('i', i, "row", row)
    }

    return leftmost
};

// console.log(findBottomLeftValue([2,1,3,]))
console.log(findBottomLeftValue([1,2,3,4,null,5,6,null,null,7]))