const nav = document.querySelector("#nav");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.querySelector("#year").textContent = new Date().getFullYear();