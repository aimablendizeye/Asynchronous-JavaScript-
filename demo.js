




function calculation (a,b,callbacks){
     console.log(a + b) ;
     callbacks();
}
function taskComplete () {
  console.log("Task Completed");
}


calculation(4,7,taskComplete);












