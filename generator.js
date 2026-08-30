
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


// async function* giveOut () {
//     yield "a";
//     yield "b";
//     yield "c";
//     yield "d";
// }
// //const Generators  = giveOut();

// for await (let letters of giveOut()) {
//     console.log(letters.toUpperCase());
// }



// Streams (e.g., ReadableStream): A low-level browser or Node.js API designed to handle large chunks of data (like files, videos, or network payloads) bytes-by-bytes without loading everything into memory.

// Async Iterators: A JavaScript language protocol. It is just an object with a .next() method, but instead of returning a value immediately, .next() returns a Promise that resolves to { value, done }.

// for await...of: A high-level modern JavaScript loop syntax. It is specifically designed to automatically pause and wait for each Promise yielded by an Async Iterator to resolve before moving to the next iteration.



const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Keyboard", price: 100 }
];


const first = products.filter (product => product.name === "Laptop");

console.log(first);
// for (const product of products) {


//   console.log(product.name);
// }