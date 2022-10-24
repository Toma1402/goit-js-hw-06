const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

let elementArr = [];

for (let i = 0; i < ingredients.length; i += 1) {
  let element = document.createElement("li");

  element.classList.add("item");
  element.textContent = ingredients[i];
  elementArr.push(element);
}
list.append(...elementArr);
