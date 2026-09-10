

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


// function delay(ms) {
//     return new Promise(resolve => {
//         setTimeout (resolve,ms)
//     }) 
// }

// async function gettingCount() {

//     let numbers = [];
//      for (let i=0; i<5; i++) {
//       await delay(1000)

//       console.log(i)
//       numbers.push(i);        
//           }
//           return numbers;
    
// }
// gettingCount ()
//               .then(numbers => console.log(numbers))
//               .catch (error => console.log(error));



// Q2 

// async function getUserData(userId) {
//     try {

//          const user = await fetch(`/api/users/${userId}`);
//    if (!user.ok) {
//      throw new Error ("Couldn't fetch the data");
//    }
//   const userData = await user.json();
//   if (userData == null) {
//     console.log("No data Find");
//   }
   
//   return userData.name.toUpperCase();

//     }catch {
//           throw new Error ("brrrrrr")
            
//     }
 
// }

// getUserData(3)
//              .then (userData => console.log(userData))
//              .catch(error => console.log(error))



// Q3


function taskA () {
    return new Promise (resolve => {
        setTimeout(() =>  {
            resolve("Task 1 Completed ")
        },1000) 
    })
}

function taskB () {
    return new Promise (resolve => {
        setTimeout(() =>  {
            resolve("Task 2 Completed ")
        },1000) 
    })
}

function taskC () {
    return new Promise (resolve => {
        setTimeout(() =>  {
            resolve("Task 3 Completed ")
        },1000) 
    })
}


// async function allTask() {
//     const task1 = await taskA();
//     console.log(task1);
//      const task2 = await taskB();
//     console.log(task2);
//      const task3 = await taskC();
//     console.log(task3);

// }





async function  allTask() {

    const [task1,task2,task3] = await Promise.all([
          taskA(),taskB(),taskC()
    ])

            return [task1,task2,task3]
    
}
 allTask().then (result => {
    for(let data of result) {
        console.log(data);
    }
 })
        






    