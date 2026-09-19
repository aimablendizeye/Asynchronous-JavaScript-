
function asyncCounter(ms)  {
  return new Promise ((resolve) => {
    setTimeout  (() => {
      resolve()
    },ms)
  
})
 }                      
async function iterating () {
    let numbers =[];
    for(let i=1; i<5; i++) {
      try {
        await asyncCounter (1000)
        console.log(i)
        numbers.push(i)
        
      }catch (error) {
        console.error(error)
      }
      
    }
    return numbers;
  } 
  
iterating().then (data => console.log(data)).catch(error => console.error(error));