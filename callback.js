
// function calculate (a,b,callback){
//     console.log(a + b) 
//     callback();
// } 

// function message() {
//     console.log("calculation is done");
// }

// console.log(calculate(2,3,message()));
// calculate(2,3,message);


// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// greet("John", function() {
//   console.log("Welcome!");
// });




//Converting 


// function fetchData () {
//   return new Promise (resolve => {
//     const data = "Data Fetched successful";
//     setTimeout (() => {
//       resolve(data);
//     })
//   })
// }

// fetchData ()
//            .then(result => console.log(result))
//            .catch (error => console.log(error));



// Q 1

function fetchUserPromise(userId) {
   return new Promise ((resolve, reject) => {
          setTimeout(() => {
            if (userId >0) {
             resolve (`Id: ${userId} name: "John"`)
            }
            else {
              reject (new Error  (`Invalid UserId of ${userId} pls try again`));
            }
          },1000)
   })
}

fetchUserPromise(4)
                    .then (result => console.log(result))
                   
fetchUserPromise(-1) .catch(error =>console.log(error));                   
                    



