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



//Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
//Return the array in the form [x1,y1,x2,y2,...,xn,yn].
//My Longwinded answer
var shuffle = function(nums, n) {
  let x = []  
  let y = []
  let answer = []
  for(let i = 0; i < nums.length; i++){
    if(x.length < nums.length/2){
       x.push(nums[i])
    } else if(y.length <= nums.length/2){
      y.push(nums[i])
    }
  }
  for(let j = 0; j < n; j++){
    answer.push(x[j])
    answer.push(y[j])
  }
   console.log(answer)
}

shuffle([2,5,1,3,4,7],3)
shuffle([1,2,3,4,4,3,2,1],4)
shuffle([1,1,2,2],2)

//Cleaner answer.
//   let answer = []
//   for(let i = 0; i < n; i++){
//     answer.push(nums[i], nums[i+n])
//   }
//   console.log(answer)
