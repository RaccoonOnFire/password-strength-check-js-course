const password = document.querySelector("#password")
const p = document.querySelector(".passinfo")
const letters = /[a-z]/
const capitalLetters = /[A-Z]/
const numbers = /[0-9]/
const special = /[!@#$%^&*()]/
const minValue = 10

const showMssg = () => {
  if (
    password.value.length > minValue &&
    password.value.match(letters) &&
    password.value.match(capitalLetters) &&
    password.value.match(numbers) &&
    password.value.match(special)
  ) {
    p.textContent = "Very Strong Password"
    p.classList.add("very_strong_password")
    p.classList.remove("good_password", "weak_password")
  } else if (
    password.value.length > minValue &&
    password.value.match(letters) &&
    password.value.match(capitalLetters) &&
    password.value.match(numbers)
  ) {
    p.textContent = "Good Password"
    p.classList.add("good_password")
    p.classList.remove("weak_password")
  } else {
    p.textContent = "Weak Password :("
    p.classList.add("weak_password")
  }
}

const isInputEmpty = () => {
  if (password.value.length == 0) {
    p.textContent = "You didn't enter a password..."
    p.classList.remove("very_strong_password", "good_password", "weak_password")
  }
}

password.addEventListener("keyup", showMssg)
password.addEventListener("keyup", isInputEmpty)
