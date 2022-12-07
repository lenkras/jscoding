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