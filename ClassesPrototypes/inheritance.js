function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.name = function(){
    return (this.lastname + " " + this.firstname);
}

function Customer(firstname, lastname, id, spent=0){
    Person.call(this, firstname, lastname);
    this.id = id;
    this.spent = spent;
}

Customer.prototype = new Person();

Customer.prototype.bonus = function (){
        if(this.spent > 5000){
            return "gold";
        }
        if(this.spent > 1000){
            return "silver";
        }
        if(this.spent <= 1000){
            return "basic";
        }
    }

var person = new Person("Natalia", "Normal");
var customer1 = new Customer("Pete", "Programmer", 1);
var customer2 = new Customer("Cara", "Coder", 2, 1500);
var customer3 = new Customer("Gilbert", "Goldsun", 3, 8000);

console.log(person.name());
console.log(customer1.name());
console.log(customer1.bonus());
console.log(customer2.name());
console.log(customer2.bonus());
console.log(customer3.name());
console.log(customer3.bonus());