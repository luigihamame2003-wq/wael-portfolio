// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

btn?.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("show");
  btn.setAttribute("aria-expanded", String(isOpen));
});

menu?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    menu.classList.remove("show");
    btn?.setAttribute("aria-expanded", "false");
  });
});

// Reveal on scroll
const items = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
}, { threshold: 0.12 });

items.forEach(el => io.observe(el));