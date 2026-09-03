

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