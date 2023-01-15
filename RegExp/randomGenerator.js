
// get random number from 1 to 7
function getRandomNumber(){
    var tempNumber = getBuiltInRandom();
    var result = getBuiltInRandom();
    if(tempNumber%2==0){
        return result;
    }
    return result + 3;
}
    
// built in function returning values from 1 to 4
function getBuiltInRandom(){
    return Math.floor(Math.random() * 4) + 1;
}

// execution example
for(let i=0; i < 30; i++){
    console.log(getRandomNumber());
}
