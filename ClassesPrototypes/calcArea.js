/*
class Shape {
    constructor (x, y) {
      this.x = x;
      this.y = y;
    }
  
    move(x, y) {
      this. x = x;
      this.y = y;
    }
  }
class Circle extends Shape{
    constructor(x, y, radius){
        super(x, y);
        this.radius = radius;
    }

    getArea(){
        let area = 3.14159 * this.radius * this.radius;
        console.log(area);
    }
}  

let circle = new Circle(0, 0, 2);
circle.getArea();
*/

//const phone = '00358468112020';

//const regex2 = /^0{2}/;

//console.log(phone.replace(regex2, '+'));

const getGreeting = (name) => `Hi ${name}, I'm an arrow function!`;

function getGreetingFunction2(name) {
    return `Hi ${name}, I'm an C# function!`;
}

const greetingMessage = getGreeting("Lena");
console.log(greetingMessage);

console.log(getGreetingFunction2("Yevgeniy"));

const array = [1, 2, 3]

console.log(array);

const result = "";

export { getGreetingFunction2 }