function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//input, two buttons, div
const quantityInputRef = document.querySelector('input[type="number"]');

const createButtonRef = document.querySelector("[data-create]");
const destroyButtonRef = document.querySelector("[data-destroy]");

const newBoxes = document.querySelector("#boxes");
createButtonRef.addEventListener("click", createBoxes);
destroyButtonRef.addEventListener("click", destroyBoxes);
function createBoxes(amount) {
  if (quantityInputRef.value >= 1 && quantityInputRef.value <= 100) {
    amount = quantityInputRef.value;
    const boxesArr = [];
    for (let i = 0; i < amount; i += 1) {
      const box = document.createElement("div");
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${30 + 10 * i}px`;
      box.style.height = `${30 + 10 * i}px`;
      boxesArr.push(box);
    }
    newBoxes.append(...boxesArr);
  } else {
    alert("Invalid number. Please enter a number from 1 to 100");
  }
}
function destroyBoxes() {
  newBoxes.remove();
  quantityInputRef.value = "";
}
