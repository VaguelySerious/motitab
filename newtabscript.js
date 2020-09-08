const timer = document.querySelector('#timer');

const age = localStorage.getItem("age") || "1990-01-01"

let time = (new Date(new Date() - new Date(age))) / 1000 / 3600 / 24 / 365;

setInterval(() => {
	time += 1 / (365 * 24 * 3600 * 20)
	timer.innerText = time.toFixed(8);
}, 50)

