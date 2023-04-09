let inputs = document.querySelectorAll(".container input");
let div = document.querySelector(".container div");
//////////set the main color on page load //////////
document.body.style.backgroundColor = `rgb(${54},${99},${158})`;
div.innerHTML = `rgb(${54},${99},${158})`;
inputs[0].value = 54;
inputs[1].value = 99;
inputs[2].value = 158;
//////////set the main color on page load //////////
inputs.forEach((input, index) => {
  input.oninput = () => {
    document.body.style.backgroundColor = `rgb(${inputs[0].value},${inputs[1].value},${inputs[2].value})`;
    div.innerHTML = `rgb(${inputs[0].value},${inputs[1].value},${inputs[2].value})`;
  };
});
