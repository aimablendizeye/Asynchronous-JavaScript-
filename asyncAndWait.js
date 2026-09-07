

// async function asynCount() {
       
//       for (let i=0; i<5; i++) {
//     await  setTimeout (() =>{
    
//            let data = i; 
//            return data;
//     },1000)
     
//       }
// }

// asynCount()
//           .then(data => console.log(data))
//           .catch(error => console.log(error))




// Q 6 from 


function delay(ms) {
    return new Promise(resolve => {
        setTimeout (resolve,ms)
    }) 
}

async function gettingCount() {

    let numbers = [];
     for (let i=0; i<5; i++) {
      await delay(1000)

      console.log(i)
      numbers.push(i);        
          }
          return numbers;
    
}
gettingCount ()
              .then(numbers => console.log(numbers))
              .catch (error => console.log(error));
