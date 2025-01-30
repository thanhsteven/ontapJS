// * 1 getAttribute("attribute")
// - attribute : thuộc tính 
// - Lấy attribute của node

const link = document.querySelector(".link")
if (link) {
  console.log(link.getAttribute("href"));
}
const liNodes = document.querySelectorAll("li");
if (liNodes) {
  // Không lấy được attribute
  // console.log(li.getAttribute("class"))
  // Để lấy được atrribute thì dùng vòng lặp
  for (let i = 0; i < liNodes.length; i++) {
    console.log(liNodes[i].getAttribute("class"));
  }
}

// * 2 setAttribute("attribute", "value")
// - gán attribute cho node
link.setAttribute("target", "_blank");

liNodes.forEach(function(item) {
  item.setAttribute("class", "item-list");
})

// * 3 removeAttribute("attribute")
// - Xóa attribute của node
const p = document.querySelector("p");
p.removeAttribute("style");

// * 4. hasAttribute("attribute")
// - Kiểm tra attribute của node, nếu có trả về true, ngược lại false
console.log(p.hasAttribute("style"));
