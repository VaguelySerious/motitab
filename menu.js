const dateinput = document.querySelector('#date')

dateinput.value = localStorage.getItem("age") || "1990-01-01"

dateinput.addEventListener('input', () => {
	const age = dateinput.value
	if (!isNaN((new Date(age)).getTime())) {
		localStorage.setItem("age", age)
	}
})

