// 509. Fibonacci Number

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

//I worked backwards, I made an array with the numbers from the sqeunce and pushed the rest of the numbers in based on the n. I then noticed that n represented the index of that number, so it was clear to ask for the arry[n]
var fib = function(n) {
      let start = [0, 1]
  for(let i = 0; i < n; i++) { 
    start.push(  start[i] + start[i+1])
  }
  return start[n]  
};

// 1137. N-th Tribonacci Number
// The Tribonacci sequence Tn is defined as follows: 

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.

//similar to the above, but this time with 1 additional requirement.
var tribonacci = function(n) {
  let start = [0, 1, 1]
  for(let i = 0; i < n; i++) { 
    start.push(  start[i] + start[i+1] + start[i+2])
  }
  return start[n]
};


// // 70. Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
//this is basically the fib sqeunce, but you start at 1,1 instead of 0,1. This is because there is always at least 1 way to get to the next step.Also you can look at it as 2 single steps, or 1 2step.

var climbStairs = function(n) {
  let start = [1, 1]
  for(let i = 0; i < n; i++) { 
    start.push(  start[i] + start[i+1])
  }
  console.log(start[n] )
};

climbStairs(2)
climbStairs(3)

//746. Min Cost Climbing Stairs
// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor. 

//unsure why starting at 2 works? I guess starting in the middle?
var minCostClimbingStairs = function(cost) {
    let len = cost.length;
    for (let i = 2; i < len; i++) {
        cost[i] += Math.min(cost[i-1], cost[i-2]);
    }
    console.log( Math.min(cost[len-1], cost[len-2]))
};


// minCostClimbingStairs([10, 15, 20])
// minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])
 
//Having a bit of an issue...
 var rob = function(nums) {
  let n = nums.length
     //creating an array to hold possibilties 
  let dp = []

    //simple checks
   if( n==1 ){
            return nums[0];
        }else if(n == 0){
            return 0;
        }else if(n == 2){
            return Math.max(nums[0],nums[1]);
        }
   
      //storing simple checks
        dp[0] = nums[0];
        dp[1] = nums[1];
        dp[2] = nums[2] + nums[0];
        for(let i=3; i<n; i++){
            //addes to the array combinations
            dp[i] = Math.max(dp[i-2],dp[i-3]) + nums[i];
        }
    console.log(dp)
    console.log(Math.max(dp[n-1],dp[n-2]))
}

// rob([1, 2, 3, 1])
rob([2, 7, 9, 3, 1])
// rob([1, 2])
// rob([2,1,1, 2])




//213. House Robber II
//You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.


//Essentially, you want to take the orginal array and break it up into sub arrays. I broke mine up into 2 sub arrays. the first which excludes the last value and the second sub array which excludes the first value. 
//From there we are in the "same" position as the previous problem, so we just use it as a funciton and pass each sub array through it and find the max between them.
 
var rob = function(cost) {
  let l = cost.length;
  let sub1 = []
  let sub2 = []

     if (l == 1) {
      return cost[0];
    } else if (l == 0) {
      return 0;
    } else if (l == 2) {
      return Math.max(cost[0], cost[1]);
    }


  for (let i = 0; i < l - 1; i++) {
    sub1.push(cost[i])
  }

  let x = cost.reverse()
  for (let i = 0; i < l - 1; i++) {
    sub2.push(x[i])
  }

  var robSub = function(nums) {
    let n = nums.length
    //creating an array to hold possibilties 
    let dp = []

    //simple checks
 
    //storing simple checks
    dp[0] = nums[0];
    dp[1] = nums[1];
    dp[2] = nums[2] + nums[0];
    for (let i = 3; i < n; i++) {
      //addes to the array combinations
      dp[i] = Math.max(dp[i - 2], dp[i - 3]) + nums[i];
    }
    // console.log(dp)
    return (Math.max(dp[n - 1], dp[n - 2]))
  }


  console.log(Math.max(robSub(sub1), robSub(sub2)))
};

