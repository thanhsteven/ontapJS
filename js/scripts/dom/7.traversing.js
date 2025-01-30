// * 1. parentNode, parentElement, removeChild
// - parentNode vs parentElement : lấy phần tử cha của cái DOM đó
const span = document.querySelector("span");
console.log(span.parentNode.parentNode);
span.parentElement.removeChild(span);

// * 2. nextElementSibling : tìm tới phần tử kế tiếp
// * previousElementSibling : tìm tới phần tử trước đó
const spanClass = document.querySelector(".span");
const nextSpan = spanClass.nextElementSibling;
console.log(nextSpan);
const previousLink = spanClass.previousElementSibling;
console.log(previousLink);

// * 3. childNodes : trả về hết các node bên trong bao gồm cả textNode
// * children : trả về các node không bao gồm textNode
console.log(spanClass.childNodes);
console.log(spanClass.children);

// * 4. firstChild : lấy phần tử con đầu tiên bao gồm textNode
console.log(spanClass.firstChild);
// * firstElementChild :
console.log(spanClass.firstElementChild);

// * 5. lastChild : Lấy phần tử cuối cùng bao gồm textNode
console.log(spanClass.lastChild);
// * lastElementChild : Lấy phần tử cuối cùng
console.log(spanClass.lastElementChild);
console.log(spanClass.lastChild);
