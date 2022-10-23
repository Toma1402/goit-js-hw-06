const slider = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

slider.addEventListener("input", changeSize);

function changeSize(evt) {
  textRef.style.fontSize = `${slider.value}px`;
}
console.log(slider.value);
