/*
Write the function loop(). This function has to use the functions passed to it as arguments, 
but using the word "for" isn't allowed. 
*/

function loop(n, check, reduce, print){
while (n > 0) {
    print(n);
    var isGreather = check(n);
    if(isGreather){
        n = reduce(n);
    }
 }
}

var value = 3;
var greaterThanZero = function(n){
    return n > 0;
}

var reduceOne = function(n){
    return n - 1;
}

var printValue = function(n){
    console.log(n);
}

loop(value, greaterThanZero, reduceOne, printValue);