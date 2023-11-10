function one() {
     return 1;
}
function two() {
     return one() + one();
}
function three() {
     let ans = two() + one();
     console.log(ans);
}
three();

// Single Threads => javascript is a single thread language it behave like asynchronous

setTimeout(function () {
     console.log("hello");
}, 2000)
console.log("kesa hai bhaaai");

// callBack hell

let h1 = document.querySelector("h1");
function changeColor(color, delay) {
     return new Promise((resolved,rejected) => {
          setTimeout(() => {
               let num = Math.floor(Math.random()*10) +1 ;
               if(num > 3){
                    rejected("promise rejected");
               }
               h1.style.color = color;
               console.log(`color changed to ${color}!`);
               resolved("color changed");
          }, delay)
     })
}

async function demo(){
     try{
          await changeColor("blue", 1000);
          await changeColor("red", 1000);
          await changeColor("green", 1000);
          await changeColor("orange", 1000);
          changeColor("blue", 1000);
     
          let n = 5;
          console.log(n+5);
     }
     catch(err){
          console.log(err);
          console.log("err caught")
     }
}

changeColor("red", 1000)
     .then(() => {
          console.log("red color was completed");
          return changeColor("blue", 1000);
     })
     .then(() => {
          console.log("blue color was completed");
          return changeColor("orange", 1000);
     })
     .then(() => {
          console.log("orange color was completed");
          return changeColor("darkGreen", 1000);
     })
     .then(() => {
          console.log("darkGreen color was completed");
          return changeColor("black",1000)
     })


// changeColor("red", 2000, () => {
//      changeColor("green", 1000, () => {
//           changeColor("blue", 1000, () => {
//                changeColor("pink", 1000, () => {
//                     changeColor("black", 1000)
//                });
//           })
//      });
// });
// changeColor()

// callback nesting => callback hell
// Promises => The promises object represent the eventual completion (or failure)
// of an asynchronous operation and its resulting value.

// Promises is a object

function savetoDB(data, success, failure) {
     let internetspeed = Math.floor(Math.random() * 10) + 1;

     if (internetspeed > 4) {
          success();
     } else {
          failure();
     }
}

savetoDB("apna college", () => {
     console.log("success : your data was saved");
     savetoDB("hello world", () => {
          console.log("success2 : your data was saved");
          savetoDB("sunil", () => {
               console.log("success3 : your data was saved")
          }, () => {
               console.log("failure3 : weak connection. data not saved")
          })
     }, () => {
          console.log("failure2 : weak connection. data not saved");
     });
}, () => {
     console.log("failure : weak connection. data not saved");
});

// Promises
function savetoDB(data) {
     return new Promise((resolve, reject) => {
          let internetspeed = Math.floor(Math.random() * 10) + 1;
          if (internetspeed > 4) {
               resolve("sucess: data was saved");
          } else {
               reject("failure: weak connection");
          }
     })
}

// Promises in .then() and .catch()
// request => promises object

let request = savetoDB("apna college");
request.then(() => {
     console.log("promises was resolved");
     console.log(request);
})
.catch(() => {
     console.log("promises was rejected");
     console.log(request)
})

// Promises Chaning

savetoDB("apna college")
     .then((result) => {
          console.log("data1 saved");
          console.log("Promises of result", result);
          return savetoDB("hello world");
     })
     .then((result) => {
          console.log("data2 saved");
          console.log("Promises of result", result);
          return savetoDB("Sunil Dev");
     })
     .then((result) => {
          console.log("data3 saved");
          console.log("Promises of result", result);
     })
     .catch((error) => {
          console.log("promises was rejected");
          console.log("Promises error", error);
     })










