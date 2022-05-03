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
// var rob = function(nums) {
//   let answer  = []
//   if(nums.length === 0){
//     return 0
//   }
//   if(nums.length === 1){
//     return nums[0]
//   }
//   if(nums.length === 2){
//     return Math.max(...nums)
//   }

//   for (let i = 2; i < nums.length; i++) {
//    nums[i]= Math.max((nums[i]+nums[i-2]),nums[i-1])
//    answer.push(nums[i])
//   }
//     console.log(answer)
//     console.log(answer[answer.length-1])
//     // console.log(Math.max(...answer))
// }
var rob = function(nums) {
  let rob1 = 0
  let rob2 = 0
  let n = 0
  for (let i = 0; i < nums.length; i++){
    let temp = Math.max(nums[n] + nums[rob1], nums[rob2])
    n = i
    rob1 = rob2
    rob2 = n
    console.log(temp)
     
  }
  console.log(n)
  console.log(rob1)
  console.log(rob2)
  // console.log(Math.max(nums[n] + nums[rob1], nums[rob2]))
}

rob([1, 2, 3, 1])
// rob([2, 7, 9, 3, 1])
// rob([1, 2])
// rob([2,1,1, 2])

