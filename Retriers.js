


function retriying(ms) {
  return new Promise(resolve => {
    setTimeout (resolve,ms)
  })
}


async function fetchWithRetry(url, retries) {
  for (let attempt = 0; attempt <= retries; attempt++) {
       await retriying (1000)
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();
      return data;

    } catch (error) {
      if (attempt < retries) {
        console.log("Retrying....");
      } else {
        throw error;
      }
    }
  }
}
// Example:
fetchWithRetry("https://api.example.com/data", 6)
  .then(data => {
    console.log("Data:", data);
  })
  .catch(error => {
    console.error("Request failed:", error);
  });