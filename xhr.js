
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