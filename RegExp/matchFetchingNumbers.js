var sentence = "5om3 wr173 w0rd5 u51n9 numb3r5";

function printDigits(){
    var expression =  /\d{1}/g;
    var numbers = expression.test(sentence);
    if(!numbers){
        console.log("No digits!")
    }
    if(numbers){
    var arrayOfNumbers = sentence.match(expression);
    console.log(arrayOfNumbers.join());
    }
}
printDigits();

//\d{1}(,\d{1}){0,}
//5om3 wr173 w0rd5 u51n9 numb3r5.