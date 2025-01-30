// * 1. offsetWidth, offsetHeight
const boxed = document.querySelector(".box");
function log(value) {
  console.log(value);
}
// Độ rộng của phần tử
log(boxed.offsetWidth);
// Chiều cao của phần tử
log(boxed.offsetHeight);

// * 2. offsetLeft, offsetTop
// Vị trí của nó so với bên trái
log(boxed.offsetLeft);
// Vị trí của nó so với phía trên
log(boxed.offsetTop);
