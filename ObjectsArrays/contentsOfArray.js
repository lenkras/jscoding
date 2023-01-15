/*
addNumber() reads a value from a text input field on the HTML document (id="num")
and adds it at the end of the array.

printInfo() outputs the amount of elements in the array to the console, 
then the average of their values.
*/

let myArray = [];

function addNumber() {
	let givenNumber = document.getElementById("num").value;
    myArray.push(givenNumber);
}

function printInfo(){
	let total = 0;
	let arrayLength = myArray.length; 
    
    for (let i=0; i < arrayLength; i++){ 
		let value = myArray[i];
        total += Number(value);	
	}	

    let average = total / arrayLength;
    console.log("The array has " + arrayLength + " elements.");
    console.log("The average of the values is " + average);
}