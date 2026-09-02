

async function displayNumber (url,ms) {
    const controller = new AbortController();

    const timeOut = setTimeout (() => {
          controller.abort();
        
    },ms)
    try {
        const response = await fetch (url, {
            signal : controller.signal
        })
        if (!response.okay) {
            return `HTTP error ${response.status}`;
        }

        return  await  response.json();

        
    }catch (error) {
        if (error.name ==="AbortError") {
            throw new Error ("Request timeout")
        }
    }
    finally {
           clearTimeout(timeOut);
    }

}

displayNumber ("https://jsonplaceholder.typicode.com/users")
.then (data => console.log(data))
.catch (error => console.log(error));