

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



function calculate (num1,num2,callback){
     const result = num1 *num2;
     const message = callback();

     return {
          result,message
     }
}

function display () {
     return "Operation is finished";
}

console.log(calculate(3,6,display));

