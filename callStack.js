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

function changeColor(color, delay, nextColorChanger) {
     setTimeout(() => {
          h1.style.color = color;
          if (nextColorChanger) nextColorChanger();
     }, delay)
}
changeColor("red", 2000, () => {
     changeColor("green", 1000, () => {
          changeColor("blue", 1000, () => {
               changeColor("pink", 1000, () => {
                    changeColor("black", 1000)
               });
          })
     });
});

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

savetoDB("apna college");