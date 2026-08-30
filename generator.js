
// Generators : Is a special Function that cn pause and resume 
//  it makes iterator very easier 

// example 



//  async function* numbers() {
//     yield 10;
//     yield 20;
//     yield 30;

// }

// const gen = numbers();

// console.log(await gen.next());
// console.log(await gen.next());
// console.log(await gen.next());
// console.log(await gen.next());
// console.log(await gen.next());




// yied means that Gives this value to whoever call next(), Then pause me here 
// it's pausable function that remember where it stoped 


// Generators are also iterables 


async function* giveOut () {
    yield "a";
    yield "b";
    yield "c";
    yield "d";
}
//const Generators  = giveOut();

for await (let letters of giveOut()) {
    console.log(letters.toUpperCase());
}