

// hard sections 

//  Q 1

async function myFetchRetries (url, retries) {

    for (let tempt=1; tempt<=5; tempt++) {

        try {
            const response = await fetch(url) 
            if (!response.ok) {
                   throw new Error ("couldn't fetch the data")
            }
        const data = await response.json();
        return data;

        }catch {
          if (tempt < retries) {
           console.log("Retriying again")

          }

          else {
            console.error(error);
            
          }
    }
 } 
}


// Q 2


// country informations from an API 
// capital city weather information from another API 
// And Temperature of the capital city 

async function fetchingInf(name) {

    const response1 = await fetch (`https://restcountries.com/v3.1/name/${name}`)
    const data1 = await response1.json();
    let country =  data1.find (n => n.country == name);

     const response2 = await fetch ("https://restcountries.com/v3.1/name/{countryName}")
     const data2 = await response2.json();
     let capital = data2.find (city => city.capital === country);

     



    
}
