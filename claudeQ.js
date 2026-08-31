


// Q 3 

async function runWithLimit(tasks, limit) {
  const results = [];

  for (let i = 0; i < tasks.length; i += limit) {
    // take a slice of `limit` tasks
    const batch = tasks.slice(i, i + limit);

    // run this batch together, wait for all of them
    const batchResults = await Promise.all(batch.map(task => task()));

    // add their results to our final array
    results.push(...batchResults);
  }

  return results;
}


function task1(a, b) { return a + b; }
function task2(c, d) { return c * d; }
function task3(e, f) { return e - f; }

const tasks = [
  () => Promise.resolve(task1(1, 2)),
  () => Promise.resolve(task2(3, 4)),
  () => Promise.resolve(task3(6, 5)),
];

runWithLimit(tasks, 2).then(result => console.log(result));
// [3, 12, 1]



// Q 4 





