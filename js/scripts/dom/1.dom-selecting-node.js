console.log("Xin chào cô chú ! xin chào các bạn");
console.log("Đây là chương 9 học về DOM trong Javascript");

// * Dom
// - Là những gì mình gặp trong trang html.
// - Dom Node : là những thẻ như body, header, div, img, ul, li,...
// - Dom Attribute : là những thuộc tính attribute trong các dom node ở trên.

//* 2.1 Seclecting Node : chọn node trong html
//- document.querySelector("#selector") --> Trả về 1 node nếu có tồn tại trong html, ngược lại thì trả về là null.
//- Selector trong CSS : .header, #main , p, b, strong, ul, li,...
const singleNode1 = document.querySelector("h1");
const singleNode2 = document.querySelector(".container");
const singleNode3 = document.querySelector("#spinner");
console.log(singleNode1);
console.log(singleNode2);
console.log(singleNode3);

//* 2.2 document.querySelectorAll("selector") --> Trả về một NodeList
//- NodeList chứa danh sách các Node, ngược lại nếu không có thì nó là empty
//- NodeList giống như mảng nhưng lại không phải là mảng.
//- NodeList giống array, có thể sử dụng vòng lặp (loop): ForEach, For of (không sử dụng với map, filter,...) và cũng không sử dụng được các phương thức khác của Array như: pop, shift, unshift, push,...
const ulNode = document.querySelectorAll("li");
console.log(ulNode);

const liNodes = document.querySelectorAll(".item");
for (let i = 0; i < liNodes.length; i++) {
  console.log(liNodes[i]);
}

//* 2.3 document.getElementByClassName("className") --> Trả về một HTML Collection
//- HTML Collection : chứa danh sách các Node, nếu không có thì trả về empty.
const classNodes = document.getElementsByClassName("item");
console.log(classNodes);

//* 2.4 document.getElementsByTagName("tagName")
const tagNodes = document.getElementsByTagName("li");
console.log(tagNodes);

//* 2.5 document.getElementsByID("id")
const idNode = document.getElementById("title");
console.log(idNode);

// * Trong các cách trên thì document.querySelector và document.querySelectorAll là được sử dụng nhiều nhất.
