

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



const name = ["Aimable","Benjamin","Reponse","Manzi"]

const stringfy = JSON.stringify(name);
console.log(name);