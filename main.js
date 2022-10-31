const wrapper = document.querySelector(".wrapper");


for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("item");
  wrapper.appendChild(div);
  div.addEventListener("mouseover", changeColor);
}

function changeColor() {
  this.style.background = "gray";
}

