function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorButton = document.querySelector(".change-color");
const backgrColor = document.querySelector("body");
const colorName = document.querySelector(".color");
const changeBackgroundColor = (evt) => {
  colorName.textContent = getRandomHexColor();
  backgrColor.style.background = colorName.textContent;
  console.log(colorName.textContent);
};
changeColorButton.addEventListener("click", changeBackgroundColor);
