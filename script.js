const toggle = document.getElementById("toggle");
const closenav = document.getElementById("closenav");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");
const homePage = document.getElementById("homePage");
const nav = document.getElementById("nav");

//toggle nav
toggle.addEventListener("click", () => nav.classList.add("show-nav"));
closenav.addEventListener("click", () => nav.classList.remove("show-nav"));

//show modal
open.addEventListener("click", () => modal.classList.add("show-modal"));

//hide modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));

// //Hide moidal on outside click
window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);

// //Hide nav menu on outside click
// document.addEventListener("click", function (event) {
//   // If user clicks inside the element, do nothing
//   if (event.target.closest("nav")) return;

//   // If user clicks outside the element, hide it!
//   nav.classList.remove("show-nav");
// });
