
let h1 = document.querySelector("h1");
function changeColor(color, delay) {
     return new Promise((resolved,rejected) => {
          setTimeout(() => {
               h1.style.color = color;
               console.log(`color changed to ${color}!`);
               resolved("color changed");
          }, delay)
     })
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
     })

// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//      return new Promise((resolve) => {
//           setTimeout(() => {
//                h1.style.color = color;
//                console.log(`color changed to ${color}!`);
//                resolve("color changed");
//           }, delay);
//      });
// }

// changeColor("red", 1000)
//      .then(() => {
//           console.log("red color was completed");
//           return changeColor("blue", 1000);
//      })
//      .then(() => {
//           console.log("blue color was completed");
//           return changeColor("orange", 1000);
//      })
//      .then(() => {
//           console.log("orange color was completed");
//           return changeColor("darkGreen", 1000);
//      })
//      .then(() => {
//           console.log("darkGreen color was completed");
//      });
