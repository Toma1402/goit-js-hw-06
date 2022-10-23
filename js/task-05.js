const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", userName);

function userName(evt) {
  if (!evt.currentTarget.value) {
    return (outputRef.textContent = "Anonymous");
  }
  outputRef.textContent = evt.currentTarget.value;
}
