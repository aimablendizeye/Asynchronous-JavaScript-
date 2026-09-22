// Example 1 

function displaying () {
    let count = 1;

    const intervalTime = setInterval(() => {
        console.log(count);
        count +=4;
    },1000)

    setTimeout (() =>{
    clearInterval(intervalTime)
    console.log("Stopped Displaying..");
},5000);
}

displaying();



// Example 2 


function display(nums) {
  const arr = [];
  let i = 0;

  const interval = setInterval(() => {
    if (i >= nums.length) {
      clearInterval(interval);
      console.log("All numbers displayed");
      return;
    }

    arr.push(nums[i]);
    console.log(arr);

    i++;
  }, 500);

  setTimeout(() => {
    clearInterval(interval);
    console.log("Time stopped");
  }, 4000);

  return arr;
}

display([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);