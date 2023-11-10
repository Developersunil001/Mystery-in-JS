// Async Functions

// async function greet() {
//      throw "404 page not found"
//      return "GoodMorning";
// }
// greet()
// .then((result) => {
//      console.log("promises was resolved");
//      console.log("result was:", result);
// })
// .catch((err) => {
//      console.log("promises was rejected");
//      console.log("promises was rejected with err", err);
// })

// let demo = async () =>{
//      return 5;
// }

// Await Functions 

function getNum() {
     return new Promise((resolved, rejected) => {
          setTimeout(() => {
               let num = Math.floor(Math.random() * 10) + 1;
               console.log(num);
               resolved();
          },1000)
     })
}

async function demo() {
    await getNum();
    await getNum();
     getNum();

}