/*
Write the function loop(loops, number, func), which runs the given function the given number of times.
*/

function loop(loops, number, func){
    if(loops>0){
        for(let i = 0; i< loops; i++){     
          number = func(number)
        }
        return number
      }
      else{
        return "There has to be at least 1 loop!"
      }
}

function halve(n) {     
    return n / 2;
}
  
function square(n) {    
    return n ** 2;
}

console.log(halve(50));
console.log(loop(5, 200, halve));
console.log(loop(3, 5, square));
console.log(loop(-1, 99, halve));