let currentRoom = "start";

function displayRoom() {
  let room = rooms[currentRoom];
  document.getElementById("game-text").innerHTML = room.description;
}

function handleInput() {
  let input = document.getElementById("input").value;
  let action = getAction(input);
  if (action) {
    executeAction(action);
  } else {
    document.getElementById("game-text").innerHTML = "Invalid input.";
  }
}

function getAction(input) {
  // Parse the user's input and return an action object
}

function executeAction(action) {
  // Update the game state based on the action object
}

const rooms = {
  start: {
    description: "You are in a dark room. There is a door to the north.",
    exits: {
      north: "hallway"
    }
  },
  hallway: {
    description: "You are in a long hallway. There are doors to the east and west.",
    exits: {
      east: "kitchen",
      west: "bedroom"
    }
  },
  kitchen: {
    description: "You are in a kitchen. There is a knife on the counter.",
    exits: {
      west: "hallway"
    },
    objects: {
      knife: {
        name: "Knife",
        description: "A sharp knife.",
        takeable: true
      }
    }
  },
  bedroom: {
    description: "You are in a bedroom. There is a bed and a dresser.",
    exits: {
      east: "hallway"
    }
  }
};

displayRoom();