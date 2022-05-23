let night = false;

const bodyEl = document.getElementById("body");
const profileEl = document.getElementById("profile");
const h1El = document.getElementById("name");
const pEl = document.getElementById("job");
const quoteEL = document.getElementById("quote");
const btn = document.getElementById("btn");

function btnToggle() {
  bodyEl.classList.toggle("body-night");
  profileEl.classList.toggle("night");
  h1El.classList.toggle("h1-night");
  pEl.classList.toggle("p-night");
  quoteEL.classList.toggle("social-night");
  btn.classList.toggle("btn-night");
}
