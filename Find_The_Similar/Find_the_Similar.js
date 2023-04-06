const colors = ["red", "green", "blue", "yellow", "purple", "orange"];
const words = ["red", "green", "blue", "yellow", "purple", "orange"];
const shuffledWords = words.sort(() => 0.5 - Math.random());
const correctIndex = Math.floor(Math.random() * colors.length);

const gameBoard = document.getElementById("game-board");

shuffledWords.map((word, index) => {
	const button = document.createElement("button");
	button.innerHTML = word;
	button.style.backgroundColor = colors[index];
	button.addEventListener("click", () => {
		if (index === correctIndex) {
			alert("Correct!");
		} else {
			alert("Incorrect.");
		}
	});
	gameBoard.appendChild(button);
});