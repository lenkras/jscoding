/*
Print all prime numbers which are in the range of 0 to maxInputNumber
*/
let maxInputNumber = 60;
let primeNumbersCount = 0;
for (let number = 1; number <= maxInputNumber; number++){
    let isPrime = number != 1;
    for (let index = 2; index < number; index++) {
        if (number%index == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(number);
        primeNumbersCount += 1;
    }    
}
console.log(`Total of prime numbers found: ${primeNumbersCount}`);