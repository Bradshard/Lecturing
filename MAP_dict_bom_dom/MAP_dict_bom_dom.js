// Map example
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);
document.getElementById("map-example").innerHTML = `The squares of ${numbers} are ${squares}.`;

// Dictionary example
const dictionary = {"apple": 1, "banana": 2, "cherry": 3};
const keys = Object.keys(dictionary);
const values = Object.values(dictionary);
document.getElementById("dictionary-example").innerHTML = `The keys of ${dictionary} are ${keys}, and the values are ${values}.`;

// BOM example
document.getElementById("bom-example").innerHTML = `The current URL is ${window.location.href}.`;

// DOM example
const newElement = document.createElement("p");
newElement.innerHTML = "This is a new paragraph added to the DOM.";
document.getElementById("dom-example").appendChild(newElement);