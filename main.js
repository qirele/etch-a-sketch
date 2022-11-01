const wrapper = document.querySelector(".wrapper");
const customBtn = document.querySelector(".custom");
const resetBtn = document.querySelector(".reset");
const normalBtn = document.querySelector(".normal");
const colorfulBtn = document.querySelector(".colorful");

let currentSize = 16;
let lightness = 100;
createGrid(currentSize);
let mode = "normal";

customBtn.addEventListener("click", () => createGrid(getNewSize()));
resetBtn.addEventListener("click", () => createGrid(currentSize));
normalBtn.addEventListener("click", () => mode = "normal");
colorfulBtn.addEventListener("click", () => mode = "colorful");

function createGrid(num) {
  currentSize = num;
  while (wrapper.firstChild) wrapper.removeChild(wrapper.lastChild);
  wrapper.style.gridTemplateColumns = `repeat(${num}, ${800 / num}px)`;
  wrapper.style.gridTemplateRows = `repeat(${num}, ${800 / num}px)`;

  for (let i = 0; i < num * num; i++) {
    const div = document.createElement("div");
    div.classList.add("item");
    div.addEventListener("mouseover", changeColor);

    wrapper.appendChild(div);
  }
}

function changeColor() {
  if (mode === "normal") {
    this.style.background = "rgb(50,50,50)";
  }

  if (mode === "colorful") {
    let hue = Math.floor(Math.random() * 360);
    this.style.background = `hsl(${hue}, 100%, ${lightness}%)`;

    lightness -= 10;

    if (lightness === -10) {
      lightness = 100;
    }
  }
}

function getNewSize() {
  let num = prompt("Gimme a number less than 100", "");

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

  return num;
}
