// * 1. textContent
// - Trả về nội dung nằm giữa thẻ tag mở và thẻ tag đóng.
const spinner = document.querySelector("#spinner");
// spinner.textContent = "Hello New content";
console.log(spinner.textContent);

// *  2. innerText
// - Lấy được content và lấy được những gì mắt người nhìn thấy được.
console.log(spinner.textContent);
console.log(spinner.innerText);

// * 3. innerHTML
// - Lấy ra được hết nội dung bên trong bao gồm cả html của nó luôn.
console.log(spinner.innerHTML);
