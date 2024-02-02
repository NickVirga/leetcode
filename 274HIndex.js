/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    // my solution did not work for all test cases
    // citations.sort((a,b) => b-a)    

    // let maxHpos = Math.min(citations[0], citations.length)
    // if (maxHpos === 1) {
    //     return maxHpos
    // }
   
    
    // for (let i = 1; i < citations.length; i++) {
    //     // console.log("********************")
    //     // console.log("i:",i, "value:", citations[i])
    //     // console.log("maxHpos:", maxHpos)
             
    //     if (citations[i] < maxHpos) {
            
    //         // maxHpos = Math.min(citations[i], citations.length - i)
    //         maxHpos = citations[i]
    //         // console.log("newMaxHPos:", maxHpos)
    //     }

    //     if (i + 1 >= maxHpos) {
    //         return maxHpos
    //     }

    // }
    // return maxHpos

    citations.sort((a,b) => a-b)
    
    const len = citations.length

    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= len - i) {
            return len-i
        }
    }
    return 0
};

console.log(hIndex([3,0,6,1,5])) //3
console.log(hIndex([2,0,6,1,5])) //2
console.log(hIndex([1,3,1])) //1
console.log(hIndex([0,1])) //1
console.log(hIndex([4,4,0,0])) //3


  