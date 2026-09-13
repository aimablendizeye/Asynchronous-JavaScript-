

// Q 12 

// function* randomNumber () {
//     const nums = Math.random(1,100) * 100;

//     yield nums;
    
// }

// const calling = randomNumber();

// console.log(calling.next());




function delay (ms) {
    return new Promise (resolve => {
        setTimeout(resolve,ms)
    })
}

async function* randomNumber() {
     for (let i=1; i<=5; i++) {
        await delay(500)

        let numbers = Math.floor(Math.random() * 100) +1;

        yield numbers;
     }  
}

async function run() {

    for await (let numbers of randomNumber()) {
        console.log(numbers);
    }
    
}

 run();



