/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
let k = 0
  for (let i = 0; i < m + k; i++) {
    
    for (let j = 0 + k; j < n; j++) {
        console.log("nums1[i]=", nums1[i]);
        console.log("nums2[j]=", nums2[j])
        if (nums2[j] < nums1[i]) {
            
            console.log("insert num2s'", nums2[j], "at position", j, "before num1s'", nums1[i], "at position", i)
            nums1.splice(i,0,nums2[j])
            nums1.pop()
            i++
            console.log(nums1)
            console.log("offset is now ", j + 1)
            k++
            
        } else {
            console.log("> break")
            break
        }

    }
  
  }

  if (n > k) {
    console.log(nums1)
    nums1.splice(m+k, n-k, ...nums2.slice(k))
    console.log(nums1)
  }
  
  console.log("result:", nums1)

};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([1], 1, [], 0);
merge([0], 0, [1], 1);
merge([0, 0, 0, 0, 0, 0], 3, [0, 0, 0], 3);
