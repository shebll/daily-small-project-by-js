//////////method one (hex) two (rgb)//////////
let btn = document.querySelector(".container .btn");
let randomHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let color = [];
btn.addEventListener("click", () => {
  // for (let index = 0; index < 6; index++) {
  //   color.push(randomHex[Math.floor(Math.random() * randomHex.length)]);
  // }
  // document.body.style.backgroundColor = `#${color.join("")}`;
  // color = [];
  document.body.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
});
