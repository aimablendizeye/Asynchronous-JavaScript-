
function calculate (a,b,callback){
    console.log(a + b) 
    callback();
} 

function message () {
    console.log("calculation is done");
}

// console.log(calculate(2,3,message()));
calculate(2,3,message);