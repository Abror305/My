const body = document.getElementById("body");
const sidebar = document.getElementById("sidebar");
const nav = document.querySelector("nav");
let mains = document.getElementById("mains");

const allText = document.querySelectorAll("p, span, mark, li, h1:not(.title), h2:not(.title), h3:not(.title), h4:not(.title), h5:not(.title), h6:not(.title)");
const a = document.querySelectorAll("a");
const i = document.querySelectorAll("i");

window.addEventListener("DOMContentLoaded", () => {
  enableDarkMode(); // faqat dark mode ishga tushadi
});

function enableDarkMode() {
  body.style.backgroundColor = "#1a202c";
  sidebar.style.backgroundColor = "#2d3748";
  nav.style.backgroundColor = "#2d3748";
  nav.style.color = "white";
  if (mains) mains.style.color = "white";

  allText.forEach(t => t.style.color = "#f1f5f9");
  a.forEach(el => el.style.color = "#f1f5f9");
  i.forEach(el => el.style.color = "#f1f5f9");

  document.querySelectorAll("mark").forEach(mark => {
    mark.style.backgroundColor = "#4a5568";
    mark.style.color = "#f1f5f9";
  });

  // diagram-label matnlarini oq rangda qilish
  document.querySelectorAll(".diagram-label").forEach(p => {
    p.style.color = "#f1f5f9";
  });
}
