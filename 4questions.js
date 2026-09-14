

// Question number 1 


async function getUserDashboard() {

    try {

         const [responseUser,responsePost,responseTodo] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/users/1"),
          fetch("https://jsonplaceholder.typicode.com/posts?userId=1"),
          fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
    ])

     if (!responseUser.ok ||!responsePost.ok || !responseTodo.ok) {
    throw new Error (`One of the response has issue`);
}

    const [userData, postData,todoData] = await Promise.all ([
          responseUser.json (),
          responsePost.json(),
          responseTodo.json()

    ])

    return {
        user : userData,
        posts : postData,
        todos : todoData
    }

    }catch  (error) {
        console.log(error);
        throw error
    }
   
}

getUserDashboard()
               .then (data => console.log(data))
               .catch(error => console.error(error))