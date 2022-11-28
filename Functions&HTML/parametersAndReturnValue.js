/*
The function calcPower(base, exponent) has to calculate and return a number 
based on values passed to it.
*/

function calcFunc(){
    let num = fetchValue("num");
    let exponent = fetchValue("exponent");

    console.log("The number " + num + " to the power of" + exponent + " is:");
    console.log(calcPower(num, exponent));
}
function fetchValue(id) {
	return document.getElementById(id).value;
}

function calcPower(num, exponent) {
    let power = Math.pow(num, exponent);

    if (exponent == 0) {
        power = 1;
    }
    
    if (exponent < 0) {
        power = 1 / Math.pow(num, (-1)*exponent);
    }

    return power;
}
