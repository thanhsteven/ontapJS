// * 1. insertAdjacentText(position, text)
// - Chèn chuỗi text vào 4 vị trí của 1 element
const h3 = document.querySelector("h3");
//- h3.insertAdjacentText("position","text");
// - position: có 4 vị trí: beforeBegin, afterBegin, beforeEnd, afterEnd.
h3.insertAdjacentText("beforebegin", "Đây là Before Begin");
h3.insertAdjacentText("afterbegin", "Đây là After Begin");
h3.insertAdjacentText("beforeend", "Đây là Before End");
h3.insertAdjacentText("afterend", "Đây là After End");

// * 2. insertAdjacentElement(position, node)
// - Chèn element (tag html) vào 4 vị trí của 1 element
const strong = document.createElement("strong");
strong.classList.add("bold");
h3.insertAdjacentElement("beforeend", strong);

// * 3. insertAjdacentHTML
const template = `<ul><li>item 1</li><li>item 2</li><li>item 3</li></ul>`;
document.body.insertAdjacentHTML("afterbegin", template);
