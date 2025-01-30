// * Thêm xóa sửa Node trong Javascript

// * 1. document.createElement("div")
// - Tạo Element trong Javascript
const div = document.createElement("div");

// * 2. document.appendChild
// document.body --> thẻ body
const body = document.body;
body.appendChild(div);
div.classList.add("container");
div.className = "container wrapper";
div.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro quasi id assumenda non dolor nihil enim nemo similique unde.";
div.innerHTML = '<strong style="display: none">Hello Word</strong>';

const card = document.createElement("div");
card.classList.add("card");
const cardImage = document.createElement("img");
cardImage.setAttribute("src", "https://images.unsplash.com/photo-1582639590011-f5a8416d1101?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJpa2luaSUyMHNleHl8ZW58MHx8MHx8fDA%3D");
card.appendChild(cardImage);
body.appendChild(card);

// * 3. document.createTextNode
// - Truyền vào bên trong 1 chuỗi
const text = document.createTextNode("Hello my name is Kim Thành");
const h1 = document.createElement("h1");
body.appendChild(h1);
h1.appendChild(text);

// * 4. element.cloneNode
// - Tạo ra một bản sao của một element nào đó
const h1Clone = h1.cloneNode();
body.appendChild(h1Clone);

// * 5. element.hasChildNodes
// - Kiểm tra element có phần tử con hay không ? Nếu có trả về true, ngược lại false
console.log(h1.hasChildNodes);