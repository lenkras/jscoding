
function Person(firstname, lastname, id){
  this.firstname = firstname;
  this.lastname = lastname;
  this.id = id;
}

var shop = {};

shop.customerRegistry = (function(){
  var customerList = [];
  var idNextValue = 0;

  function addUser(firstname, lastname){
    var person = new Person(firstname, lastname, idNextValue);
    customerList.push(person);
    console.log("Added customer with ID  " + idNextValue);
    idNextValue++;
  }

  function printSinglCustomerInfo(id) {
    var customer = customerList.find(person => person.id == id);
    if(customer){
      console.log(`${customer.id}: ${customer.lastname} ${customer.firstname}`);
    }
    else{
      console.log("Too high an ID value!");
    }
    
  }

  function printAllCustomers() {
    console.log("Listing all customers:");
    customerList.forEach(customer => console.log(`${customer.id}: ${customer.lastname} ${customer.firstname}`));
  }

  return {
    add: addUser,
    customerInfo: printSinglCustomerInfo,
    customerList: printAllCustomers,
  };
})();

shop.customerRegistry.customerInfo(0);
shop.customerRegistry.add("Pete", "Programmer");
shop.customerRegistry.add("Cara", "Coder");
shop.customerRegistry.customerInfo(1);
shop.customerRegistry.add("Samuel", "Scripter");
shop.customerRegistry.add("Wendy", "Webmaster");
shop.customerRegistry.customerList();