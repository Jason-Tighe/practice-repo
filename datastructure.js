// 217. Contains Duplicate
//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j< nums.length; j++)
        if(nums[i] === nums[j]){
           return true
        }
    }
    return false

// Description:
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Solution:
// Time Complexity : O(n)
// Space Complexity: O(1)

var maxSubArray = function(nums) {
  var prev = 0;
  var max = -Infinity;

  for (var i = 0; i < nums.length; i++) {
    // Compare previous contiguous sum with current number
    prev = Math.max(prev + nums[i], nums[i]);
    // Check if the current prev is the greatest sum 
    max = Math.max(max, prev);
  }
  return max;
};

// 1. Two Sum
//this uses a hashmap to check if we've seen 1 of the numbers previously. This is important, becaue the first time i wrote this out an issue i ran into was that it might return [1,1] because that was the index of nums[i] and nums[j].

var twoSum = function(nums, target) {

  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i]
    let num2 = target - num1
    if (map.has(num2)) {
      return [i, map.get(num2)]
    }
    map.set(num1, i)
  }
}


// 88. Merge Sorted Array
// // Orginally tried it this way, too forced. Had to check the better/proper way to do it. essentialy it's inserting the largest number from nums1 or nums2 to teh end of the array. It does this ill it reaches m+n. 
// var merge = function(nums1, m, nums2, n) {
//   for (let i = 1; i < m + n - 2; i++) {
//     nums1[m + n - i] = Math.max(Math.max(nums2[n - i]), Math.max(nums1[m - i]))

//   }
//   console.log(nums1.sort((a, b) => a - b))
//   return nums1.sort((a, b) => a - b)
// }

var merge = function(nums1, m, nums2, n) {
  let first = m - 1
  let second = n - 1
  let i = m+n-1

  while(second >= 0){
    let fVal = nums1[first]
    let sVal = nums2[second]

    if(fVal > sVal){
       nums1[i] = fVal
      i--
      first--
    } else {
      nums1[i] = sVal
      i--
      second--
    }
   
  }
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)

merge([0], 0, [1], 1)


//Intersection of Two arrays. 

//Woridng really messed me up on this, was very unsure what they meant by intersecting. After a bunch of review for what they were looking for it became a lot clearer, but how to get there, not so much.
//I def need to work harder on hashmaps.
var intersect = function(nums1, nums2) {
     let obj = {}
 let result = []
  //make a hashmap of the first array of nums
for(let i of nums1){
  if(!obj[i]){
    obj[i] = 1
  } else {
    obj[i]++
  }
}  
  //loop through the second array of nums and see if the hashmap has a count of the value.
for(let i of nums2){
  if(obj[i] > 0){
    result.push(i)
    obj[i]--
  }
}
  return result
};

//This was weird, because I had the code correct, but it wasn't working. I think it's because of where i declared the buy

var maxProfit = function(prices) {
  
 let maxP = 0
 
   let buy = prices[0]
  for(let i = 1;  i < prices.length; i++){
   
    let sell = prices[i]
    let profit = sell - buy

    maxP = Math.max(maxP, profit)
    if(sell < buy) buy = sell
  }
  return maxP
}

maxProfit([7, 1, 5, 3, 6, 4])
