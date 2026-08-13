

// Control Flow


// function useName (name){
//     console.log(name);
// }
// function  greet (say){
//     console.log(say);

// }
// setTimeout (() => {
//     console.log("good Bye")
// },1000);

// greet("Good Morning");
// useName("Aimable");


// Callback in two functions 



// function greeting (callback) {
//     console.log("Good Morning Aimable");

// } 

// function bye (){
//     console.log("Thank you for your time");
// }

// greeting(bye()


//callback with the timer 



// function say (name) {
//       console.log(name);
// }

// setTimeout(() => {
//     say("Hey Aimable");
    
// },1000);






// function calculate (num1, num2,callback){
//      const result = num1 + num2;
//      console.log(result);
//      callback();
        
// }

// function display () {
//      console.log("Calculation is Done");
// }

// calculate(3,5,display);



// function calculate (num1,num2,callback){
//      const result = num1 *num2;
//      const message = callback();

//      return {
//           result,message
//      }
// }

// function display () {
//      return "Operation is finished";
// }

// console.log(calculate(3,6,display));


// function firstName (name){
//      console.log("034: " + name);
// }

// function lastName (useName){
//      console.log("112: " + useName);
// }

// lastName("Ndizeye");
// firstName("Aimable");


// function greeting (callback){
//      console.log("Hello Aimable");
//      callback();
// }

// function saying (callback){
//      console.log("Have a Nice day ");
//      callback();
    
// }

// function goodbye (){
//      console.log("See you next time");
// }

// greeting(()=> {
//      saying(()=>
//       goodbye)});


// function greet (name , callback){
     
//      callback(name + " Aimable");

// }

// function display (message){
//      console.log(message);
// }

// console.log(greet("Hello", display));




// Exercises 

// console.log("Start");

// setTimeout(() => {
//     console.log("A");

//     setTimeout(() => {
//         console.log("B");
//     }, 0);

//     console.log("C");
// }, 1000);

// setTimeout(() => {
//     console.log("D");
// }, 0);

// console.log("End");




// Promises 
// Example  1


//      let name = "AImable"

//      const promise = new Promise ((resolve, reject) => {
  
//     if (name.includes("A")){
//         resolve("This name contain Letter A");
//     }
//     else {
//         reject ("The name doesn't contain A");
//     }
// })

// promise.
//   then (response => console.log(response))
//   .catch(error =>console.error(error));


// Example 2 // Try using Async and await 


// function walkDog (){
//     return new Promise ((resolve , reject) => {
//         setTimeout (() =>{
//             let walkdog = true;
//             if (walkdog){
//                     resolve("You walked the Dog");
//             }
//             else {
//                 reject ("You don't walked the dog");
//             }
            
//         }, 1500);
//     })
// }

// function cleanKitchen () {
//     return  new Promise ((resolve, reject) => {
//              setTimeout (() => {
//                   resolve ("You cleaned the Kitchen")
//              }, 1000);
//      })
// }

// function moveTrash (){
//      return new Promise ((resolve, reject) => {
//              setTimeout (() => {
//                   resolve ("You moved The Trash")
//              }, 500);
//      })
// }

// async function activities () {

//   try {

//     const first = await walkDog();
//     console.log(first);

//     const second = await cleanKitchen ();
//     console.log(second);

//      const third = await moveTrash ();
//     console.log(third);

//     console.log("all the task completed");

//   }
//   catch (error) {
//     console.error(error);

//   }
   
// }

// activities();


// walkDog().then (value => {console.log(value); return cleanKitchen ()})
//          .then (value => {console.log(value); return moveTrash()})
//          .then (value => {console.log(value); console.log("You finished all the activity")})
//          .catch (error => console.error(error));






// example 2  

// function makeCoffee () {
//     const delay = (ms) => new Promise (resolve => setTimeout(resolve ,ms))

//     delay (1000).then (() => {
//               console.log("Coffee is ready!"); return delay (500)
//     }).then (() => console.log("Coffee served!"));
                
// }

// makeCoffee();







// function makeCoffee() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Coffee is ready!");
//         }, 1000);
//     });
// }

// makeCoffee()
//     .then(result => {
//         console.log(result);

//         return new Promise(resolve => {
//             setTimeout(() => {
//                 resolve("Coffee served!");
//             }, 500);
//         });
//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.error(error);
//     });




// setTimeout (() => {
//   console.log("Hello Aimable");
//   setTimeout (() => {
//     console.log("Hey How are you?")

//     setTimeout (() => {
//       console.log("Are feeling Okay!")
//     },0);
//   } ,500);
// },1000);


// async function getData (){
//   return 43;
// }

// let result = getData();
// console.log(result);




// Returning Promise inside then () Method




// const promise = new Promise ((resolve,reject) => {
//          setTimeout (() => {
//           resolve (10)
//          }, 3 * 100);
// })

// promise.then ( (value) =>{ 
//   console.log(value);
//    return value *2;
// }).then ((value) => {
//   console.log(value);
  
// })



// returning Nested promise inside Then () Method 




const p = new Promise ((resolve,reject) => {
   setTimeout (() => {
         resolve(10)
   }, 3000);
})

p.then ((value) => {
  console.log(value);

  return new Promise ((resolve,reject)=> {
    setTimeout (() => {
      resolve (value * 3);
    },2000)
  })

}).then ((value) => {
  console.log(value)

  return new Promise ((resolve, reject) => {
    setTimeout (()=> {
      resolve (value *4);
    },1000)
  })

}).then (value => console.log(value));


