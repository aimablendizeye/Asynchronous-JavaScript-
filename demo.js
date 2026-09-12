
function delay (ms) {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve()
        },ms)
    })
}

async function example() { 
    try {

         console.log('Start');
         await delay(1000);
      //  console.log(task1)
        console.log('After 1 second');
         await delay(2000);
        // console.log(task2);
         console.log('After 3 seconds total')

    }catch (error) {
        console.error(error)}
  
}

example();