// Set up game board
const gameBoard = document.getElementById("game-board");
let score = 0;

// Generate random coordinates for target
let targetX = Math.floor(Math.random() * 280);
let targetY = Math.floor(Math.random() * 280);

// Create target element
const target = document.createElement("div");
target.style.width = "20px";
target.style.height = "20px";
target.style.backgroundColor = "red";
target.style.position = "absolute";
target.style.left = targetX + "px";
target.style.top = targetY + "px";
gameBoard.appendChild(target);

// Add event listener for mouse click
gameBoard.addEventListener("click", handleClick);

function handleClick(event) {
  const x = event.clientX - gameBoard.offsetLeft;
  const y = event.clientY - gameBoard.offsetTop;
  if (x >= targetX && x <= targetX + 20 && y >= targetY && y <= targetY + 20) {
    score++;
    document.getElementById("score").innerHTML = "Score: " + score;
    targetX = Math.floor(Math.random() * 280);
    targetY = Math.floor(Math.random() * 280);
    target.style.left = targetX + "px";
    target.style.top = targetY + "px";
  }
}