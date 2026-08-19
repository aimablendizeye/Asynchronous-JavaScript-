

// Fetching data 

// const fs = require("fs/promises");

// async function loadData() {
//   const response = await fs.readFile("aimable.json", "utf-8");

//   const data = JSON.parse(response);

//   console.log(data.user.name);
// }

// loadData();





// async function loadData() {
//   const response = await fetch("http://localhost:3000/aimable.json");

//   const data = await response.json();

//   console.log(data.user.name);
// }

// loadData();




// Fetching multiple files 



// async function multiple (){

//     const  [customerData,productData,salesData] = await Promise.all([
//               fetch("customer.json"), 
//               fetch("product.json"),
//               fetch ("sales.json")
                      
//     ])

      
// }




// Fetching some data  and read them in console



// const name = ["Aimable","Benjamin","Reponse","Manzi"]

// const stringfy = JSON.stringify(name);
// console.log(name);

// fetch("aimable.json")
//      .then (response => response.json())
//      .then (value => console.log(value));


// console.log("Browser is Working!");


// Fetching some data using fetch method and then;



// fetch ("https://pokeapi.co/api/v2/pokemon/pikachu")
//       .then (response => {
//             if (!response.ok) {
//                   throw new Error ("Could not fetch Resources");
//             }
//             else {
//                   return response.json();
//             }
//       })
//       .then (data => console.log(data.id))
//       .catch(error => console.error(error));
     



// fetch using async and await 


async function loadData () {
  try {

       const pikachuData = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu"); 
      if (!pikachuData.ok) {
            throw new Error ("Couldn't fetch data");
      }
      else {
               const response = await pikachuData.json();
                 console.log(response);
      }

  }

  catch(error)  {
             console.error(error)
  } ;
     
     

    
}

loadData();