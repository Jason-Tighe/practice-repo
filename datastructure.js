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
