

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



 

               
// Q 2


async function loadUserData() {
  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 2000);

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        signal: controller.signal
      }
    );

    if (!response.ok) {
      throw new Error("HTTP error occurred");
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    
    if (error.name === "AbortError") {
      console.log("Request cancelled");
    } else {
      console.error("Something went wrong:", error);
      throw error;
    }
  } finally {
    clearTimeout(timeout);
  }
}

loadUserData();   


 //  Q 3 


  function getUsers() {
 
    const xhr = new XMLHttpRequest();
    xhr.open ('GET',"https://jsonplaceholder.typicode.com/users",true)

  

    xhr.onload = () => {
        if (xhr.status >=200 && xhr.status<300) {
            const users =JSON.parse(xhr.responseText) ;

            for (let user of users) {
                console.log(user.name)
            }
        }
        else  {
            throw new Error ("Could not fetch data")
        }

    }

    xhr.onerror = () => {
         throw new Error ("Network error")
    }

    xhr.send();
}

getUsers();