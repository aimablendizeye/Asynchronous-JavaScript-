

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




function calculate (num1, num2,callback){
     let result = num1 + num2;
     callback();
     return result;
}

function diplay () {
     console.log("Calculation is Done");
}

console.log(calculate(3,5,diplay));