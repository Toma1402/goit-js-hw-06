let counterValue = 0;
const value = document.querySelector("#value");

const decrementButton = document.querySelector('[data-action="decrement"]');
decrementButton.addEventListener("click", decrease);

function decrease(event) {
  counterValue -= 1;
  value.textContent = counterValue;
}
const incrementButton = document.querySelector('[data-action="increment"]');
incrementButton.addEventListener("click", increase);

function increase(event) {
  counterValue += 1;
  value.textContent = counterValue;
}
