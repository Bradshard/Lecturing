// Define canvas and context
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Set canvas dimensions
canvas.width = 400;
canvas.height = 600;

// Set bird properties
var bird = {
  x: 50,
  y: 300,
  speed: 0,
  gravity: 0.5,
  lift: -10,
  radius: 20
};

// Set pipe properties
var pipes = [];
var pipeWidth = 50;
var pipeGap = 150;
var pipeSpeed = 2;
var lastPipeTime = Date.now();

// Set score properties
var score = 0;

// Update bird position
function updateBird() {
  bird.speed += bird.gravity;
  bird.y += bird.speed;
  
  if (bird.y < bird.radius) {
    bird.y = bird.radius;
    bird.speed = 0;
  }
  
  if (bird.y > canvas.height - bird.radius) {
    bird.y = canvas.height - bird.radius;
    bird.speed = 0;
  }
}

// Draw bird on canvas
function drawBird() {
  ctx.beginPath();
  ctx.arc(bird.x, bird.y, bird.radius, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();
}

// Update pipe position
function updatePipes() {
  if (Date.now() - lastPipeTime > 1500) {
    var pipeY = Math.random() * (canvas.height - pipeGap);
    pipes.push({
      x: canvas.width,
      y: pipeY
    });
    lastPipeTime = Date.now();
  }
  
  for (var i = 0; i < pipes.length; i++) {
    pipes[i].x -= pipeSpeed;
    
    if (pipes[i].x < -pipeWidth) {
      pipes.splice(i, 1);
      i--;
    }
    
    if (bird.x > pipes[i].x && bird.x < pipes[i].x + pipeWidth) {
      if (bird.y < pipes[i].y || bird.y > pipes[i].y + pipeGap) {
        // Collision detected
        gameOver();
      }
    }
    
    if (pipes[i].x + pipeWidth == bird.x) {
      score++;
      updateScore();
    }
  }
}

// Draw pipes on canvas
function drawPipes() {
  ctx.fillStyle = "green";
  
  for (var i = 0; i < pipes.length; i++) {
    ctx.fillRect(pipes[i].x, 0, pipeWidth, pipes[i].y);
    ctx.fillRect(pipes[i].x, pipes[i].y + pipeGap, pipeWidth, canvas.height - pipes[i].y - pipeGap);
  }
}

// Update score on screen
function updateScore() {
  document.getElementById("score").innerHTML = "Score: " + score;
}

// Game over function// Game over function
function gameOver() {
  // Stop the game
  clearInterval(intervalId);
  
  // Display the final score
  var scoreElement = document.getElementById("score");
  scoreElement.innerHTML = "Game over! Final score: " + score;
  scoreElement.style.display = "block";
}

// Handle click events
function handleClick() {
  bird.speed = bird.lift;
}

// Set up click event listener
document.addEventListener("click", handleClick);

// Add event listener to reset button
document.getElementById("reset-button").addEventListener("click", reset);

// Reset function
function reset() {
  // Reset variables
  bird = {
    x: 50,
    y: canvas.height/2,
    speed: 0,
    gravity: 0.6,
    lift: -10,
    radius: 20
  };
  pipes = [];
  score = 0;

  // Start the game loop again
  clearInterval(intervalId);
  intervalId = setInterval(gameLoop, 1000/60);

  // Hide the game over message
  document.getElementById("score").style.display = "none";

  // Draw the bird again
  drawBird();
}

// Set up game loop
var intervalId = setInterval(gameLoop, 1000/60);

// Game loop function
function gameLoop() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Update and draw bird
  updateBird();
  drawBird();
  
  // Update and draw pipes
  updatePipes();
  drawPipes();
  
  // Check for collision
  checkCollision();
  
  // Update score
  updateScore();
}

