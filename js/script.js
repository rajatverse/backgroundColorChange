const body = document.querySelector("body");
const colors = ["red", "green", "blue", "yellow", "orange", "purple", "pink"];

function changeColor() {
    index = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[index];
}