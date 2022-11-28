/*
Check the age and print appropriate note depending on the input. 
Where 18 years or more: "The user is an adult."

Under 18 years, but over 0 years: "The user is not yet an adult."

Otherwise: "Invalid input!"
*/

function checkAge (){
    let age = document.getElementById("age").value;

if (age >= 18) {
    console.log("Input age: " + age)
    console.log("The user is an adult.")
}	
else if (age < 18 && age > 0) {
    console.log("Input age: " + age)
    console.log("The user is not yet an adult.")
} 
else {
    console.log("Input age: " + age)
    console.log("Invalid input!")
}
}