let score = 0;
let scoreValue = document.getElementById("score-value");

function incrementScore() {
  score++;
  scoreValue.innerHTML = score;
  if (scoreValue.innerHTML >= 10){
    document.getElementById("score-value").innerHTML = "Congratulations you clicked 10 times."
  };
}
function resetGame(){
  score = 0;
  document.getElementById("score-value").innerHTML = score;
}