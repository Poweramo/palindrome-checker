// TODO: stocking palindroms in localStorage

const form = document.querySelector("form");
const inputText = document.getElementById("text");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	if (inputText.value !== "") {
		let inversedText = [];

		inputText.value.split("");
		for (let i = inputText.value.length - 1; i > -1; i--) {
			inversedText.push(inputText.value[i]);
		}

		if (inputText.value === inversedText.join("")) {
			alert("This is a palindrome");
		} else {
			alert("This isn't a palindrome");
		}

		inputText.value = "";
	}
});
