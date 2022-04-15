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



// You have a data structure of employee information, including the employee's unique ID, importance value, and direct subordinates' IDs.

// You are given an array of employees employees where:

// employees[i].id is the ID of the ith employee.
// employees[i].importance is the importance value of the ith employee.
// employees[i].subordinates is a list of the IDs of the direct subordinates of the ith employee.
// Given an integer id that represents an employee's ID, return the total importance value of this employee and all their direct and indirect subordinates.

// var GetImportance = function(employees, id) {
//   let identity = [0]
//   let importance = [1]
//   let subords = [2]
//   let totalImport = []

//   // const subImport = (i) =>{
//   //   if (employees[i][subords].length > 0) {
//   //         for (let j = 0; j < employees[i][subords].length; j++) {
//   //           totalImport.push(employees[subords][importance])
//   //           // console.log( totalImport.reduce((a, b) => a + b))
//   //         }
//   //      }
//   //   // console.log(totalImport.reduce((a, b) => a + b))
//   //   return totalImport.reduce((a, b) => a + b)
//   // }

//   // for (let i = 0; i < employees.length; i++) {
//   //   if (employees[i][identity] == id) {
//   //     totalImport.push(employees[i][importance])
//   //     subImport(i)
//   //     // if (employees[i][subords].length > 0) {
//   //     //   for (let j = 0; j < employees[i][subords].length; j++) {
//   //     //     totalImport.push(employees[subords][importance])
//   //     //   }
//   //     // }
//   //   }
//   // }
//   //     return (totalImport.reduce((a, b) => a + b))

//   /**
//    * Definition for Employee.
//    * function Employee(id, importance, subordinates) {
//    *     this.id = id;
//    *     this.importance = importance;
//    *     this.subordinates = subordinates;
//    * }
//    */

//   class Employee {
//     constructor(id, importance, subordinates) {
//       this.id = id;
//       this.importance = importance;
//       this.subordinates = subordinates;
//     }
//   }

//   for (let i = 0; i < employees.length; i++) {
//     totalImport.push(new Employee(
//       employees[i][identity],
//       employees[i][importance],
//       employees[i][subords]))
//     console.log(totalImport)
//   }
//   // console.log(totalImport[0].id)
//   //  console.log(totalImport[1].id)
//   //  console.log(totalImport[2].id)
//   let test = []
//   for (let i = 0; i < employees.length; i++) {
//     if (totalImport[i].subordinates.length > 0) {
//       for (let j = 0; j < totalImport[i].subordinates.length; j++) {
//         // console.log(totalImport.findIndex((e) => e.id == totalImport[i].subordinates[j]))
//         let x = totalImport[totalImport.findIndex((e) =>
//           e.id == totalImport[i].subordinates[j])].importance
//         console.log(x)
//         test.push(x)
//         console.log(test)
//         // console.log(totalImport.filter(test => test.id ==   totalImport[0].subordinates[0]))
//       }
//         test.push(totalImport[i].importance)
//         let answer = test.map((x) => x).reduce(function(total, sum) {
//           return total + sum;
//          }, 0)      
//     }
//   }

// }

//I was able to get this to work, but for some reason I couldn't get it to "return" the answer no matter what i did.... not sure what i should have done.

 // A robot on an infinite XY-plane starts at point (0, 0) facing north. The robot can receive a sequence of these three possible types of commands:

// -2: Turn left 90 degrees.
// -1: Turn right 90 degrees.
// 1 <= k <= 9: Move forward k units, one unit at a time.
// Some of the grid squares are obstacles. The ith obstacle is at grid point obstacles[i] = (xi, yi). If the robot runs into an obstacle, then it will instead stay in its current location and move on to the next command.

// Return the maximum Euclidean distance that the robot ever gets from the origin squared (i.e. if the distance is 5, return 25).

// Note:

// North means +Y direction.
// East means +X direction.
// South means -Y direction.
// West means -X direction.
// var robotSim = function(commands, obstacles) {
//   // let startX = 0
//   // let startY = 0
//   // let start = [startX, startY] 
//   const walks = (i) => {
//     if (postion == "north") {
//       sumY += commands[i]
//     } else if (postion == "east") {
//       sumX += commands[i]
//     } else if (postion == "south") {
//       sumY -= commands[i]
//     } else {
//       sumX -= commands[i]
//     }
//     console.log(sumX, sumY)
//   }

//   const turnLeft = (i) => {
//     x -= 1
//     let postion = direction[(x % direction.length + direction.length) % direction.length]
//     console.log(postion)
//     return postion

//   }

//   const turnRight = (i) => {
//     x += 1
//     let postion = direction[(x % direction.length + direction.length) % direction.length]
//     console.log(postion)
//     return postion

//   }

//   let direction = ["north", "east", "south", "west"]
//   let postion = direction[0]
//   let sumY = 0
//   let sumX = 0
//   let x = 0

//   for (let i = 0; i < commands.length; i++) {
//     console.log("start " + postion)
//     if (commands[i] >= 0) {
//       walks(i)
//       console.log("move")
//     } else if (commands[i] == -1) {
//       turnRight(i)
//       console.log("turn right")
//     } else {
//       turnLeft(i)
//       console.log("turn left")
//     }

//     console.log(sumX, sumY)
//     console.log(postion)
   
//   }

//   // console.log(i, direction[(i % direction.length +   direction.length) % direction.length])


// };

// robotSim([4, -1, 3], [])
// // robotSim([4,-1,4,-2,4],[[2,4]])

// // for i in -6...7 {
// //   print(i, foo[(i % foo.count + foo.count) % foo.count])
// // }

