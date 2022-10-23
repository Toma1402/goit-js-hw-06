const form = document.querySelector(".login-form");

form.addEventListener("submit", submit);
function submit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;

  if (!email.value || !password.value) {
    alert("All fields must be filled!");
    return;
  }
  const userData = { email: email.value, password: password.value };

  console.log(userData);
  form.reset();
}
