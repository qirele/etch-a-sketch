const wrapper = document.querySelector(".wrapper");
const customBtn = document.querySelector(".custom");
const resetBtn = document.querySelector(".reset");

let currentSize = 16;

customBtn.addEventListener("click", () => {
  let num;

  num = prompt("Gimme a number less than 100", "");

  if (isNaN(num) || num === null || num === "") {
    num = 16;
  } else {
    num = parseInt(num);
  }

  if (num < 0) {
    num = 2;
  }

  if (num > 100) {
    num = 100;
  }

  currentSize = num;
  while (wrapper.firstChild) wrapper.removeChild(wrapper.lastChild);
  createGrid(num);
});


resetBtn.addEventListener("click", () => {
  while (wrapper.firstChild) wrapper.removeChild(wrapper.lastChild);
  createGrid(currentSize);
});


createGrid(currentSize);

function createGrid(num) {
  wrapper.style.gridTemplateColumns = `repeat(${num}, ${800 / num}px)`;
  wrapper.style.gridTemplateRows = `repeat(${num}, ${800 / num}px)`;

  for (let i = 0; i < num * num; i++) {
    const div = document.createElement("div");
    div.classList.add("item");
    div.addEventListener("mouseover", changeColor);

    wrapper.appendChild(div);
  }
}

let lightness = 100;

function changeColor() {
  let hue = Math.floor(Math.random() * 360);
  this.style.background = `hsl(${hue}, 100%, ${lightness}%)`;

  lightness -= 10;

  if (lightness === -10) {
    lightness = 100;
  }
}
