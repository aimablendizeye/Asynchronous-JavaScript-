

// Fetching data 

const { use } = require("react");

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



// fetching pikachu data 





// async function loadData () {
//   try {

//        const pikachuData = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu"); 
//       if (!pikachuData.ok) {
//             throw new Error ("Couldn't fetch data");
//       }
//       else {
//                const response = await pikachuData.json();
//                  console.log(response);
//       }

//   }
//   catch(error)  {
//              console.error(error)
//   } ;
       
// }
// loadData();



//   fetch ("").then (response => {
//       if (!response.ok){
//         throw new Error ("Couldn't get resources")
//       }

//       return response.json();
//   })


//   async function getData () {

//   }

//   // or 

//   const getData = async () => {

//   }

//   const have = () => {
//     console.log ("Having someone like you is really amazing")
//   }

//   have();



const getUsers = async () => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const response = await fetch(url);
  return await response.json();
};

const render = (users) => {
  return users.map(({ name, email }) => `<li>${name} (${email})</li>`).join('');
};

(async () => {
  const users = await getUsers();
  document.querySelector('#content').innerHTML = `<ul>${render(users)}</ul>`;
})();



// Fetching data Using XHR 



//  Question 3 - XHR fetch  

  // let  xhr = new XMLHttpRequest ();

  // xhr.open ('GET',"https://jsonplaceholder.typicode.com/users");
  // xhr.responseText = "json";

  //  xhr.onload = function(){

  //   if (xhr.status >=200 && xhr.status <300) {
  //      console.log(xhr.response);

  //   }
  //   else {
  //     console.log("Error:",xhr.status)
  //   }   
  //  };
  //  xhr.onerror = function () {
  //     console.log("Network Error");
  //  }

  //  xhr.send();


  // Fetch API 



  // async function  loadData() {
  //   const response = await fetch ("https://jsonplaceholder.typicode.com/users")
  //   const data = await response.json();
  //   console.log(data);
    
  // }

  // loadData();



// Post Method 


// async function pushData () {
//   const user = {
//     id : 2929,
//     name : "Aimable",
//     address : "Kanombe"
//   }

//   const response = await fetch("https://jsonplaceholder.typicode.com/users" ,{
//       method : "POST",
//       headers : {
//         "Content-Type" : "application/json"
//       },
//       body :  JSON.stringify(user)

//   })

//   const data = await response.json ();

//   console.log(data);


// }

// pushData ();



// Post Mthod With parameter 


async function createData (user) {

  try {
    const url =  "https://jsonplaceholder.typicode.com/users"
    const headers = {
      "Content-Type" : "application/json"
    }

    const body =JSON.stringify({
        id : user.id,
        name : user.name,
        address : user.address

    }) 

    const response = await fetch (url, { method: "POST",
      headers, body });

      const data = await response.json();
      console.log(data);
      }

  catch (error) {
    console.log(error)
    
  }
 
  }
createData ({
  id : 2789,
  name : "aimable",
  address : "jjjj"
})




  
