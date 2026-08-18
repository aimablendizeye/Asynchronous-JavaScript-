
// Promise.all () Method 

const p1 = new Promise ((resolve, rejected) =>{

    setTimeout(() => {
        console.log("The first promise resolved");
          resolve (10)
    }, 1000 );
});

const p2 = new Promise ((resolve, rejected) =>{

    setTimeout(() => {
        console.log("The second promise resolved");
          rejected (20)
    }, 2000 );
});


const p3 = new Promise ((resolve, rejected) =>{

    setTimeout(() => {
        console.log("The third promise resolved");
          resolve (30)
    }, 3000 );
});


Promise.all([p1,p2,p3]).then (result => {
      const sum  = result.reduce ((a,b) => a+b);

      console.log(`Result : ${result}`);
      console.log(`sum : ${sum}`);
      
}
).catch (error => console.log(error));
