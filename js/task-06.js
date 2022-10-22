//get input
const inputText = document.querySelector("#validation-input");

//get attribute
const comparedNumber = document.querySelector('[data-length="6"]');

//get attribute value
const valueOfNumber = comparedNumber.dataset.length;

inputText.addEventListener("blur", validation);

function validation(evt) {
  console.log(evt.currentTarget.value.length, "and", Number(valueOfNumber));
  if (evt.currentTarget.value.length === Number(valueOfNumber)) {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
  } else {
    inputText.classList.remove("valid");
    inputText.classList.add("invalid");
  }
}
