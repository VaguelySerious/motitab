const timer = document.querySelector('#timer');

const age = localStorage.getItem("age") || "1990-01-01"

const currentYear = new Date().getYear()
const birthYear = new Date(age.slice(0, 4) + '-06-06').getYear()
const birthDateinCurrentYear = new Date('20' + (currentYear - 100) + age.slice(4))

let years = currentYear - birthYear - 1
let time = 1 - (birthDateinCurrentYear - new Date()) / 1000 / 3600 / 24 / 365

setInterval(() => {
 time += 1 / (365 * 24 * 3600 * 20)
 if (time >= 1) {
  years += 1
  time -= 1
 }
 timer.innerText = (years + time).toFixed(8);
}, 50)