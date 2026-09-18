// Q 1

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

displayNumber ("https://jsonplaceholder.typicode.com/users",5000)
.then (data => console.log(data))
.catch (error => console.log(error));


// Q 2 

async function myFetching (url,ms) {
   const controller = new AbortController()
   let timeOut = setTimeout (() =>{
           controller.abort()
   },ms)
   try {
     let names = [];
       let response = await fetch(url,{
      signal: controller.signal
  })
       if(!response.ok) {
         throw new Error (`http , ${response.status}`)
       }
     let result = await response.json()
     for (let data of result ) {
      names.push(data.name)
     }
     let newArr = [];
     for (let i=1; i<=names.length; i++) {
      newArr.push(`${i}. ${names[i]}`)
     }
     for (let num of newArr) {
       console.log(num)
     };
     
   }catch(error) {
     if (error.name == "AbortError") {
       throw new Error ("Request time out ")
     }
   }finally {
     clearTimeout(timeOut);
   }
 
}

myFetching(" https://jsonplaceholder.typicode.com/users",3000)
  .then(result => console.log(result))
  .catch(error => console.log(error))