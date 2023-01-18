var containsDuplicate = function(nums) {
  let answer = []
  nums.sort((a,b)=>a-b)
  for(let i=0; i<nums.length; i++){
  if(nums[i]== nums[i+1]){
      answer.push(true)
    }   else {
      answer.push(false)
    }
  }

  if(answer.includes(true)){
    return true
  } else {
    return false
  }

};

containsDuplicate([1,2,3,1])


var isAnagram = function(s, t) {

  console.log(t.split("").sort().toString() === s.split("").sort().toString())

};

isAnagram("anagram", "nagaram")
isAnagram("rat", "cat")




var twoSum = function(nums, target) {
let mp = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        
        if (mp.has(diff)) {
            console.log([i, mp.get(diff)])
        }
        
        mp.set(nums[i], i)
    }

};

twoSum([2, 7, 11, 15], 9)
twoSum([3, 2, 3], 6)
twoSum([3, 2, 4], 6)

var isPalindrome = function(s) {
let answer = []
let newS = s.split(" ").join("").toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "").split("")
  for(let i=0; i<newS.length; i++){
    if(newS[i] == newS[newS.length-(1+i)]){
        // console.log(newS[i], newS[newS.length-(1+i)])
     answer.push(true)
    } else {
      answer.push(false)
    }
  }
  if(answer.includes(false)){
    return false
  } else {
    return true
  }
};

isPalindrome("A man, a plan, a canal: Panama")
isPalindrome("race a car")
