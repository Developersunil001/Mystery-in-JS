// API => Application Programming interface
// API give the data into JSON Format

//JSON => Javascript object notation
// JSON means String

// JSON.parse(data) => Methods to parse a string data into a JS object
// JSON.stringify(json) => Method to parse a JS object data into JSON

// parse => one data format to change other data format 

// Api testing tools => hoppscotch.io and Postman

// Ajax => asynchronous javascript and XML

// Status Code :
// 200 - ok
// 404 - Not Found 
// 400 - Bad Request 
// 500 - Internal Server Error 

// let url1 = "https://catfact.ninja/fact";

// fetch(url)
//      .then((res) => {
//           return res.json();
//      })
//      .then((data1) => {
//           console.log("data1 :", data1.fact);
//           return fetch(url1);
//      })
//      .then((res) => {
//           return res.json();
//      })
//      .then((data2)=>{
//           console.log("data2 :",data2.fact);
//      })
//      .catch((err) => {
//           console.log("Error", err);
//      })

//      console.log("Happy Diwali");


// Axios


// let btn = document.querySelector("button").addEventListener("click", async () => {
//      let fact = await getFacts();
//      let p = document.querySelector("#result");
//      p.innerText  = fact;
// })

// let url = "https://catfact.ninja/fact";
// async function getFacts() {
//      try {
//           let res = await axios.get(url);
//           return (res.data.fact);
//      } catch (error) {
//           console.log("error hai bhai api me",error);
//      }
// }


let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {
     let link = getImage();
     //    console.log(link)
     let img = document.querySelector("#result");
     img.setAttribute("src", link);
     console.log(link)
});

async function getImage() {
     try {
          let res = await axios.get(url2);
          return res.data.message
          // return (res);
     } catch (error) {
          return "error hai bhai api me", error;
     }
}

let url = "https://icanhazdadjoke.com";

async function getJokes(){
     try {
      const config = {headers : {Accept:"application/json"} }
      let res = await axios.get(url,config);
      console.log(res.data)
     } catch (error) {
          console.log(error);
     }
}

// let url = "https://universities.hipolabs.com/search?name=";


