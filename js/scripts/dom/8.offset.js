// * 1. offsetWidth, offsetHeight
const boxed = document.querySelector(".box");
function log(value) {
  console.log(value);
}
// Độ rộng của phần tử
log("offsetWidth: " + boxed.offsetWidth);
// Chiều cao của phần tử
log("offsetHeight: " + boxed.offsetHeight);

// * 2. offsetLeft, offsetTop
// Vị trí của nó so với bên trái
log("offsetLeft: " + boxed.offsetLeft);
// Vị trí của nó so với phía trên
log("offsetTop: " + boxed.offsetTop);

// * 3. offsetParent
// Lấy ra phần tử cha
log("offsetParent: " + boxed.offsetParent);

log("-----------------");

// * 4. clientWidth, clientHeight, clientTop, clientLeft
// Lấy độ rộng phần tử trừ đi cái border.
log("clientWidth: " + boxed.clientWidth);
// Lấy chiều cao phần tử trừ đi cái border.
log("clientHeight: " + boxed.clientHeight);
// Lấy vị trí của nó so với bên trái border.
log("clientLeft: " + boxed.clientLeft);
// Lấy vị trí của nó so với phía trên border.
log("clientTop: " + boxed.clientTop);

log("-----------------");

// * 5. window.innerWidth, window.outerWidth, window.innerHeight, window.outerHeight
log("innerHeight: " + window.innerHeight);
log("outerHeight: " + window.outerHeight);
log(window.outerHeight - window.innerHeight);
log("innerWidth: " + window.innerWidth);
log("outerWidth " + window.outerWidth);

log("-----------------");

// * 6. selector.getBoundingClientRect()
// Lấy ra được tọa độ, kích thước của phần tử
log(boxed.getBoundingClientRect());
// Left, x: vị trí của khối so với bên trái
// top: vị trí của khối với phía trên
// bottom: chiều cao của khối + top
// right: độ rộng của khối + left
// width: độ rộng
// heigth: chiều cao
