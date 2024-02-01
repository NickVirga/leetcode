/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a,b) => b-a)
    let maxH = citations.length
    let hIndex = 0
    
    for (let i = 0; i < citations.length; i++) {
        console.log("********************")
        console.log("i:",i, "value:", citations[i])
        console.log("maxH before:",maxH)
        if (citations[i] < maxH) {
            maxH = Math.min(citations.length - i, i + 1)
        }
        console.log("maxH after:",maxH)
        
    }


};

hIndex([3,0,6,1,5])