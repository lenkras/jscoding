function sum (...numbers){
	totalSum = 0;
	numbers.forEach(function(num){
		totalSum+=num;
	})
	return totalSum;
}
console.log(sum(1,4,3,8,11));