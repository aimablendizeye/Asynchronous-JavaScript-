
// Generators : Is a special Function that cn pause and resume 
//  it makes iterator very easier 

// example 

function* numbers() {
    yield 10;
    yield 20;
    yield 30;

}

const gen = numbers();

console.log(gen.next());



// yied means that Gives this value to whoever call next(), Then pause me here 
// it's pausable function that remember where it stoped 