

function myFetch(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(new Error(`Request failed with status ${xhr.status}`));
      }
    };

    xhr.onerror = () => {
      reject(new Error("Network error"));
    };

    xhr.send();
  });
}

myFetch("https://jsonplaceholder.typicode.com/users")
  .then(data => console.log(data))
  .catch(error => console.log("Error:", error));





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



 