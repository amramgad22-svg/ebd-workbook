
import { items } from "./items.js";

export function renderItems(list) {
  const productList = document.querySelector("#list");

  productList.innerHTML = "";

  list.forEach(item => {
    const card = document.createElement("li");

    card.classList.add("entry");
    card.textContent = item.name;

    productList.append(card);
  });
}

export function matching() {
  return items.filter(item => item.category === "stationery");
}

export function start() {
  renderItems(items);

  const button = document.querySelector("#show-some");

  button.addEventListener("click", () => {
    renderItems(matching());
  });
}


