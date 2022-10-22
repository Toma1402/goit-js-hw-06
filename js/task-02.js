const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

let element;

for (let i = 0; i < ingredients.length; i += 1) {
  element = document.createElement("li");
  element.classList.add("item");
  element.textContent = ingredients[i];
  list.append(element);
}
