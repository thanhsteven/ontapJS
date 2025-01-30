// * replaceChild
// node.replaceChild(newNode, oldNode)
const span = document.createElement("span");
span.textContent = "abc";

const boxed = document.querySelector(".box");
console.log(boxed);
document.body.replaceChild(span, boxed);

// * Convert HTML Collection hoặc NodeList to Array
const li = document.getElementsByTagName("li");
console.log(li);

// - Có 2 cách
console.log(Array.from(li));
console.log([...li]);
[...li].forEach((item) => console.log(item));
