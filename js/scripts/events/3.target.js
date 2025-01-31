// * target
// * currentTarget

const btn2 = document.querySelector(".btn-2");
btn2.addEventListener("click", function (event) {
  console.log(event.target); // Chọn chính xác cái element (thẻ tag html) mà mình click tới
  console.log(event.currentTarget); // Chọn cái phần tử (thẻ tag html bao bọc bên ngoài) mà mình click
});

// * event.preventDefault()
// Ngăn chặn một hành vi mặc định nào đó của thẻ tag html
const btnLink = document.querySelector(".btn-link");
btnLink.addEventListener("click", function (e) {
  e.preventDefault(); // Ngăn chặn chuyển hướng của href
  console.log("Click Links");
});
