const pete = {
	fullname: function() {return "Pete Programmer"},
	firstname: "Pete",
	age: 20	
}

const cara = {
	fullname: function() {return "Cara Coder"},
	firstname: "Cara",
	age: 32	
}

console.log("Name:" + pete.fullname() + "\t Age:" + pete.age);
console.log("Name:" + cara.fullname() + "\t Age:" + cara.age);
console.log(cara.firstname + "is" + (cara.age - pete.age) + "years older than" + pete.firstname);