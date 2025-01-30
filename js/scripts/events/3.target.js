// * target
// * currentTarget

const btn2 = document.querySelector(".btn-2");
btn2.addEventListener("click", function (event) {
  console.log(event.target); // Chọn chính xác cái element mà mình click tới
  console.log(event.currentTarget); // Chọn cái phần tử mà mình click
});

// * event.preventDefault()
// Ngăn chặn một hành vi mặc định nào đó
const btnLink = document.querySelector(".btn-link");
btnLink.addEventListener("click", function (e) {
  e.preventDefault(); // Ngăn chặn chuyển hướng của href
  console.log("Click Links");
});
