
function delay (ms) {
    const controller = new AbortController()
    return new Promise ((resolve,reject) => {
      let timeOut =  setTimeout(() => {
            controller.abort();
        },ms)
    })
   
}


async function cancellableDelay() {
   try {
     await delay (1000, {
        signal:controller.signal
    })

   }catch (error) {
    console.error(error);

   }finally{
         clearTimeout(timeOut)
   }

   
}


// async function example() { 
//     try {

//          console.log('Start');
//          await delay(1000);
//       //  console.log(task1)
//         console.log('After 1 second');
//          await delay(2000);
//         // console.log(task2);
//          console.log('After 3 seconds total')

//     }catch (error) {
//         console.error(error)}
  
// }

// example();





/// Function to cancel the delay 

