
// iterator : is an object that gives a value one at a time through (next() method)


// Example 



// const arr = [10,20,30]

// const iterators = arr[Symbol.iterator]();

// console.log(iterators.next());
// console.log(iterators.next());
// console.log(iterators.next());
// console.log(iterators.next());



// Example 2


// this is the official function with parameter and argument 



function iterating (arr) {

    const iterator = arr.values();
    let result = iterator.next();

    while (!result.done) {
             console.log(result.value)

    result = iterator.next()
    }
    
    
}
iterating ([1,2,3,4,5,6]);




