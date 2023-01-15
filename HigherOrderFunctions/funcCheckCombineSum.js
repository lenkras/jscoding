function checkFunc(arr){
    var isArrayWithStrings = false;
    for(let i = 0; i < arr.length; i++){
        let value = arr[i];
        if(isNaN(value)){
            isArrayWithStrings = true;
            break;
        }
    }
    if (isArrayWithStrings) {
        console.log("Array has strings. Combining words:");
        return false;
    }
    else {
        console.log("Array has only numbers. Calculating sum:");
        return true;
    }
}

function combineFunc(arr){
    let sentence = "";
    for (let i = 0; i < arr.length; i++){
        var word = arr[i];
        var wordWithWhiteSpace = `${word} `// word + " ";
        sentence = sentence + wordWithWhiteSpace;
    }
    return sentence;
}

function sumFunc(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum+= arr[i];
    }
    return sum;
}

var array1 = ["The", "elements", "of", "this array", "form", "a sentence"];
var array2 = [3, 5, 7, 8, 9, 11, 13, 15, 16, 17, 19, 20];
var array3 = [5, "times", 3, "is", 15];

function someFunction (arr, f1, f2, f3) {
    if (!f1(arr)){
        console.log(f2(arr));
    }
    else{
        console.log(f3(arr));
    }
}


someFunction(array1, checkFunc, combineFunc, sumFunc);
someFunction(array2, checkFunc, combineFunc, sumFunc);
someFunction(array3, checkFunc, combineFunc, sumFunc);