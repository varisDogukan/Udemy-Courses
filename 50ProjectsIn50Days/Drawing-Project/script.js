const canvas = document.querySelector("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

const ctx = canvas.getContext("2d");

let size = 5;
let isPressed = false;
let color = "black";
let x;
let y;

canvas.addEventListener("mousedown", (evn) => {
  isPressed = true;

  x = evn.offsetX;
  y = evn.offsetY;
});

canvas.addEventListener("mouseup", (evn) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (evn) => {
  if (isPressed) {
    const x2 = evn.offsetX;
    const y2 = evn.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

function updateSizeOnScreen() {
  sizeEl.innerText = size;
}

increaseBtn.addEventListener("click", () => {
  size += 2;

  if (size > 50) {
    size = 50;
  }

  updateSizeOnScreen();
});

decreaseBtn.addEventListener("click", () => {
  size -= 2;

  if (size < 2) {
    size = 2;
  }

  updateSizeOnScreen();
});

colorEl.addEventListener("change", (evn) => (color = evn.target.value));

clearEl.addEventListener("click", () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);
