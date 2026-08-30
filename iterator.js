
// iterator : is an object that gives a value one at a time through (next() method)


// Example 

const arr = [10,20,30]

const iterators = arr[Symbol.iterator]();

console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());