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
