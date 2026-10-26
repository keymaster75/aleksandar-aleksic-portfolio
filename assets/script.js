"use strict";
const bar = document.querySelector(".filter-bar");
if (bar) {
  bar.hidden = false;
  const filters = [...bar.querySelectorAll("[data-filter]")];
  const cards = [...document.querySelectorAll("[data-category]")];
  filters.forEach(button => button.addEventListener("click", () => {
    const category = button.dataset.filter;
    filters.forEach(item => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    let count = 0;
    cards.forEach(card => {
      card.hidden = category !== "svi" && card.dataset.category !== category;
      if (!card.hidden) count++;
    });
    document.getElementById("result-count").textContent = "Prikazano: " + count + " / 6 · ARPy je uvek izdvojen";
  }));
}
document.getElementById("year").textContent = String(new Date().getFullYear());
