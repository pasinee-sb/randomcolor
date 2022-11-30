//Colt's way
// const h1 = document.querySelector("h1");
// const span = document.getElementsByTagName("span");
// function randomRGB() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r},${g},${b})`;

// const intervalId = setInterval(function () {
//   for (let spa of span) {
//     spa.style.color = randomRGB();
//   }
// }, 2000);

//My way :)

let colorArray = ["#e2be2f", "#d88860", "#d04188", "#928dd6", "#6fc8d0"];
function randomColor() {
  const random = colorArray[Math.floor(Math.random() * 5)];
  return `${random}`;
}

// }
const h1 = document.querySelector("h1");
const span = document.getElementsByTagName("span");

setInterval(function () {
  for (let spa of span) {
    spa.style.color = randomColor();
  }
}, 2000);

const div = document.querySelector("div");
const h2 = document.createElement("h2");
div.append(h2);
h2.textContent = "Whatchu up to?!";
