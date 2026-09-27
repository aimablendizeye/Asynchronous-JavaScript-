
//  Example 1;

function myFetch(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {

        let data = JSON.parse(xhr.responseText)
        resolve(data);
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





 //  Example 2 
 
 const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.onload = function () {
  let data = JSON.parse(xhr.responseText)
  console.log(data);
};

xhr.send();



 

// Example 3 with using response and responsetype  = "json";


const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://jsonplaceholder.typicode.com/posts/1"
);

xhr.responseType = "json";

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log("Success!");
    console.log(xhr.response);
  } else {
    console.log("Request failed:", xhr.status);
  }
};

xhr.onerror = function () {
  console.log("Network error!");
};

xhr.send();


// Post 

const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://jsonplaceholder.typicode.com/posts/1"
);

xhr.responseType = "json";

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log("Success!");
    console.log(xhr.response);
  } else {
    console.log("Request failed:", xhr.status);
  }
};

xhr.onerror = function () {
  console.log("Network error!");
};

xhr.send();


//


  let  xhr = new XMLHttpRequest ();

  xhr.open ('GET',"https://jsonplaceholder.typicode.com/users");
  xhr.responseText = "json";

   xhr.onload = function(){

    if (xhr.status >=200 && xhr.status <300) {
       console.log(xhr.response);

    }
    else {
      console.log("Error:",xhr.status)
    }   
   };
   xhr.onerror = function () {
      console.log("Network Error");
   }

   xhr.send();




   // Post Method 


async function pushData () {
  const user = {
    id : 2929,
    name : "Aimable",
    address : "Kanombe"
  }

  const response = await fetch("https://jsonplaceholder.typicode.com/users" ,{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body :  JSON.stringify(user)

  })

  const data = await response.json ();

  console.log(data);


}

pushData ();