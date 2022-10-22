const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", userName);

function userName(evt) {
  if (!evt.currentTarget.value) {
    return (output.textContent = "Anonymous");
  }
  return (output.textContent = evt.currentTarget.value);
}
