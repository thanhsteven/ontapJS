// ! Sự khác nhau giữa parentNode và parentElement
// parentElement có thể là Null
// parentNode thì không có Null
console.log(document.documentElement.parentElement);
console.log(document.documentElement.parentNode);

// * Thẻ html toàn trang web
console.log(document.documentElement);

// * Thẻ title của trang web
document.title = "Welcome to Javascript Course";
console.log(document.title);

// * Thẻ head của trang web
console.log(document.head);
