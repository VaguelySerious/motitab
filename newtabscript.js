const timer = document.querySelector('#timer');

const age = localStorage.getItem("age") || "1990-01-01"

let time = (new Date(new Date() - new Date(age))) / 1000 / 3600 / 24 / 365;

setInterval(() => {
	time += 50 / 3600 / 24 / 365;
	timer.innerText = time.toFixed(6);
}, 50)

