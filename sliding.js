

// function maxSubarraySum(arr, k) {
//   let windowSum = 0;
//   let maxSum = 0;

//   // Calculate the first window
//   for (let i = 0; i < k; i++) {
//     windowSum += arr[i];
//   }

//   maxSum = windowSum;

//   // Slide the window
//   for (let i = k; i < arr.length; i++) {
//     windowSum -= arr[i - k]; // remove left element
//     windowSum += arr[i];     // add new right element

//     maxSum = Math.max(maxSum, windowSum);
//   }

//   return maxSum;
// }
// console.log(maxSubarraySum([1,2,3,4,5,6,7,8],3));


function lowestSubarray (arr, target) {

  let sum=0;
  let lowestSub = 0

  for (let i=0; i<arr.length; i++) {
    sum += arr[i];
    lowestSub++;
    if (sum >= target) {
      break;
    }
  }
  return lowestSub;
}

console.log(lowestSubarray([2,3,4,5,6,7],16));