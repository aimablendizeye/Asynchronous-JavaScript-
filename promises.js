

// function displaying (ms) {
//     return new Promise ((resolve) => {
//         setTimeout (resolve,ms)
         
//     })
// }

// async function everySecond() {
//         for (let i=1; i<=5; i++) {
           
//                  await displaying (2000)
//                  console.log(i)                                       
//         }
// }

// everySecond ()
// .then (data => console.log(data))
// .catch(error => console.log(error));


// Q 1

function displaying () {
    let count = 1;

    const intervalTime = setInterval(() => {
        console.log(count);
        count ++;
    },2000)

    setTimeout (() =>{
    clearInterval(intervalTime)
    console.log("Stopped Displaying..");
},5000);
}

displaying();





