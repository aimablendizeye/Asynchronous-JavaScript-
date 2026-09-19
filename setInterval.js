

function displaying () {
    let count = 1;

    const intervalTime = setInterval(() => {
        console.log(count);
        count ++;
    },2000)

    setTimeout (() =>{
    clearInterval(intervalTime)
    console.log("Stopped Displaying..");
},5000);
}

displaying();