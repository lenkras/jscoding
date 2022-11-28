/*
Said function has to create a new <button> element and append it to the <body> element.
Pressing this new button has to call the function greet().
*/

function greet(){
    console.log("Hi there!");
}

function addButton(){
const newButton = document.createElement("button");
	newButton.setAttribute("id", "createdButton");
	newButton.onclick = greet();
	document.body.appendChild(newButton);
}