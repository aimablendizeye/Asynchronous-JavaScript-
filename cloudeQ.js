

function task1 (a,b) {
    return a+b
}

function task2 (c,d) {
    return c * d;
}

function task3 (e,f) {
    return e - f;
}

 function  runWithLimit(tasks, limit) {
     
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
     const result = []
        for (let i=0; i<tasks.length; i++) {
            result.push(tasks[i]);

        }
        resolve (result);

        }, limit);
      
    })
}

runWithLimit ([task1(1,2),task2(3,4),task3(6,5)],1000)
.then (result => console.log(result));



