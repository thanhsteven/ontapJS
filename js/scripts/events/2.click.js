const button = document.querySelector(".btn-primary");
function clickme(event) {
  event.stopPropagation();
  console.log("Click btn 1");
}
button.addEventListener("click", clickme);

const btn2 = document.querySelector(".btn-2");
btn2.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Click btn 2");
});

// * bubbling: Nổi bọt
// Là clcik thì sự kiện chạy từ trong ra ngoài.
const span = document.querySelector(".btn-2 span");

// * Trường hợp 1 node chứa nhiều sự kiện cùng 1 lúc thì cách trên sẽ không chặn được.
span.addEventListener("click", function (event) {
  // - Cách chặn tốt nhất
  event.stopImmediatePropagation();
  // - Đã chặn nhưng phải để sự kiện chứa Immediate này trên cùng
  console.log("Click span 2");
});

span.addEventListener("click", function (e) {
  // - Cách để tránh tình trạng nổi bọt
  e.stopPropagation();
  console.log("Click Span");
});

document.body.addEventListener(
  "click",
  function () {
    console.log("Click body");
  },
  { capture: true }
);

// * Capture: Ngược lại với bubbling
// Là sự kiện sẽ chạy từ ngoài vào trong
const btn3 = document.querySelector(".btn-3");
const span3 = document.querySelector(".btn-3 span");

btn3.addEventListener(
  "click",
  function (e) {
    console.log("Click button 3");
  },
  { capture: true }
);

span3.addEventListener(
  "click",
  function (e) {
    console.log("Click span 3");
  },
  { capture: true }
);
