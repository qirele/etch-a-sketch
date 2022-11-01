const wrapper = document.querySelector(".wrapper");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
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

  while (wrapper.firstChild) wrapper.removeChild(wrapper.lastChild);
  createGrid(num);
});

createGrid(16);

function createGrid(num) {
  for (let i = 0; i < num * num; i++) {
    const div = document.createElement("div");
    div.classList.add("item");
    wrapper.appendChild(div);

    wrapper.style.gridTemplateColumns = `repeat(${num}, ${800 / num}px)`;
    wrapper.style.gridTemplateRows = `repeat(${num}, ${800 / num}px)`;
    div.addEventListener("mouseover", changeColor);
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
