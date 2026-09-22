

// function displaying (ms) {
//     return new Promise ((resolve) => {
//         setTimeout (resolve,ms)
         
//     })
// }

// async function everySecond() {
//         for (let i=1; i<=5; i++) {
           
//                  await displaying (2000)
//                  console.log(i)                                       
//         }
// }

// everySecond ()
// .then (data => console.log(data))
// .catch(error => console.log(error));


// Q 1    SetInterval () and SetTimeout Functions 









// Q2 PRomise All Method 


// async function fetchUserTodos(id, userId) { 
//     let url1 = "https://jsonplaceholder.typicode.com/users"
//     let url2 = "https://jsonplaceholder.typicode.com/todos"

//     const [usersResponse , toDosResponse ] = await Promise.all ([
//         fetch(url1) ,
//         fetch (url2)
        
//     ])

//     const [usersData, toDosData] = await Promise.all([
//          usersResponse.json(),
//          toDosResponse.json ()
//     ])

//   return usersData.map (user => ({
//     ...user,
//      toDosData: toDosData.filter(todo => todo.Id === user.id)
//   }))
 
// }

// fetchUserTodos (5,10)
//                   .then(result => console.log(result))
//                   .catch (error => console.log(error));


// Q 7

function getUserLikes(userId) {

  return fetch(`/api/users/${userId}`)

            .then(data => data.json())
            .then(user => fetch(`/api/users/${user.id}/posts`))
            .then(userPost => userPost.json())
            .then(posts => posts.filter(post => post.likes))
            .then(likesArr => likesArr.reduce((a, b) => a + b.likes, 0))
            .then(sum => console.log(sum))
            .catch(error => console.log(error));

}



// Q 10 

 

// Approach 1 using promise 

function fetchDataPromise(url) {
    return new Promise((resolve, reject) => {

        fetch(url)
            .then(response => {

                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }

                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });

    });
  }



// 2. Using async/await

//This is usually easier to read because it looks more like normal step-by-step code.

async function fetchDataAsync(url) {
    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        return data;

    } catch (error) {
        throw error;
    }
}

// 3. Using .then() chaining

// Here we don't create a new Promise because `fetch()` already returns one.



function fetchDataThen(url) {

    return fetch(url)
        .then(response => {

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            throw error;
        });
}





// Promise Channing 


function chainning (num) {
  return new Promise(resolve => {
     setTimeout (() => {
      resolve(num)
     },2000)
  }
)
}

chainning(5)
  .then(data =>  {
     console.log(data )
      return data * 4;
  } ).then(res => {
     console.log(res)
      return res * 8
  
}).then(tot => {
  console.log(tot)
})
   



// Promise.all

function fetchMultipleAPIs (apiUrls) {
  return Promise.all (
           apiUrls.map(url => fetch(url)))
           .then (response => Promise.all(response.map(data => data.json()))).then(data => {
    for (let res of data){
      console.log(res.title) 
    }
  }) 
}

const apiUrls = [
  'https://jsonplaceholder.typicode.com/posts/4',
  'https://jsonplaceholder.typicode.com/posts/5',
  'https://jsonplaceholder.typicode.com/posts/6'
];

fetchMultipleAPIs(apiUrls)
  .then(results => {
    console.log('Combined Results:', results);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });



// Create alarm 


function createAlarm (name, ms) {
  return new Promise ((resolve,reject) =>{
    setTimeout (() => {
      if (ms >=2) {
        resolve(`Wake up ${name}`)
      }
      else {
         reject("Delay is not sufficient")
      }
     },ms * 1000)
       
      
  })
}
createAlarm('Aimable',1)
                       .then (message => console.log(message))
                       .catch(error => console.log(error))










