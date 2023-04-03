const storyText = document.getElementById("story-text");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");

let storyIndex = 0;

const story = [
  {
    text: "You wake up in a dark forest. What do you do?",
    choice1: "Try to find a way out",
    choice1Destination: 1,
    choice2: "Stay put and wait for help",
    choice2Destination: 2
  },
  {
    text: "You come across a fork in the road. Which path do you take?",
    choice1: "Left",
    choice1Destination: 3,
    choice2: "Right",
    choice2Destination: 4
  },
  {
    text: "You wait for hours, but no one comes to rescue you. What do you do now?",
    choice1: "Try to find a way out",
    choice1Destination: 1,
    choice2: "Take a nap",
    choice2Destination: 5
  },
  {
    text: "You come across a river. What do you do?",
    choice1: "Try to swim across",
    choice1Destination: 6,
    choice2: "Follow the river",
    choice2Destination: 7
  },
  {
    text: "You come across a steep cliff. What do you do?",
    choice1: "Climb up",
    choice1Destination: 8,
    choice2: "Go around",
    choice2Destination: 9
  },
  {
    text: "You take a nap and wake up to find that it's now night time. What do you do?",
    choice1: "Try to find a way out in the dark",
    choice1Destination: 1,
    choice2: "Stay put and wait for daylight",
    choice2Destination: 2
  },
  {
    text: "You try to swim across the river but get swept away by the current. You wash up on shore downstream. What do you do now?",
    choice1: "Try to find a way back to where you were",
    choice1Destination: 3,
    choice2: "Follow the river downstream",
    choice2Destination: 10
  },
  {
    text: "You climb up the cliff but it's very steep and dangerous. You slip and fall but luckily you catch yourself on a small ledge. What do you do now?",
    choice1: "Try to climb up to the top",
    choice1Destination: 11,
    choice2: "Try to climb down to safety",
    choice2Destination: 12
  },
  {
    text: "You finally make it to the top of the cliff. You see a small town in the distance. What do you do?",
    choice1: "Head towards the town",
    choice1Destination: 13,
    choice2: "Try to find your way out of the forest",
    choice2Destination: 1
  },
  {
    text: "You follow the river downstream and come across a small village. What do you do?",
    choice1: "Head into the village",
    choice1Destination: 14,
    choice2: "Try to find your way out of the forest",
    choice2Destination: 10
  },
  {
    text: "You climb down to safety and find a cave. What do you do?",
    choice1: "Explore the cave",
    choice1Destination: 15,
    choice2: "Try to find your way out of the forest",
    choice2Destination: 1
  },
  {
    text: "You make it to the top of the cliff and find a glider. What do you do?",
    choice1: "Use the glider to fly out of the forest",
    choice1Destination: 16,
    choice2: "Try to find your way out of the forest on foot",
    choice2Destination: 1
  },
  {
    text: "You head towards the town and find help. Congratulations, you made it out of the forest!",
    choice1: "Play again",
    choice1Destination: 0,
    choice2: "",
    choice2Destination: 0
  },
  {
    text: "You explore the cave and find a map. The map shows a way out of the forest. What do you do?",
    choice1: "Follow the map",
    choice1Destination: 17,
    choice2: "Try to find your way out of the forest on your own",
    choice2Destination: 1
  },
  {
    text: "You follow the map and make it out of the forest. Congratulations, you've won the game!",
    choice1: "Play again",
    choice1Destination: 0,
    choice2: "",
    choice2Destination: 0
  }
  ];

function displayStory() {
  storyText.innerHTML = story[storyIndex].text;
  choice1.innerHTML = story[storyIndex].choice1;
  choice2.innerHTML = story[storyIndex].choice2;
  choice1.addEventListener("click", function() {
    storyIndex = story[storyIndex].choice1Destination;
    displayStory();
});
  choice2.addEventListener("click", function() {
    storyIndex = story[storyIndex].choice2Destination;
    displayStory();
});
}

displayStory();