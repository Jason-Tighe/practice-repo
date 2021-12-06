//Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

/* int maxSubArrayProduct(int[] arr, int size) {
    int maxProduct = arr[0]
    int imax = arr[0]
    int imin = arr[0]
    for(int i=1 to i<size) {
        if(arr[i]<0) 
            swap(imax,imin)
        imax = max(arr[i], imax * arr[i])
        imin = min(arr[i],imin * arr[i])
        maxProduct = max(maxProduct, imax)
    }
    return maxProduct
}  */


 var twoSum = function(nums, target) {
 let answer = []
 
   for(let x in nums){
     for(let y in nums){
       if(nums[x] + nums[y] === target){
         answer.push([nums[x], nums[y]])
       }
     }
   }

  return answer

}

twoSum([2,7,11,15], 17)

//one brute force test run
