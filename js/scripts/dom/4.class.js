// * 1. selector.classlist.add("class")
const container = document.querySelector(".container");
const p = document.getElementById("spinner");
p.removeAttribute("style");
container.classList.add("is-active");

// * 2. selector.classlist.remove("class")
container.classList.remove("is-active");

// * 3. selector.classlist.contains("class")
console.log(!container.classList.contains("is-active"));

// * 4. selector.classlist.toggle("class")
if (!container.classList.contains("is-active")) {
  container.classList.add("is-active");
} else {
  container.classList.remove("is-active");
}
container.classList.toggle("is-active");

// * 5. selector.classname
// - Trả về một chuỗi các class của selector
const h1 = document.getElementById("title");
h1.className = "title";
console.log(h1.className);

const menu = document.querySelector(".menu");
menu.classList.add("is-show");
// menu.classList.remove("is-show");
