var words = "... NINE... TEN EIGHT... TWO... ONE..."

function findTheNumber(){
    var length = words.length;
    var object = /[t][e][n]+/i.exec(words);

    var startIndex = -1;
    if(object)
    {
        startIndex = object.index;
    }
    if(startIndex == -1)
    {
        return;
    }
    var output = "";
    var result = words.substring(startIndex, startIndex + 3).toLowerCase();
    for (let i = 0; i < length; i++){
        if(i<startIndex){
            output = output + " ";
        }
        else if(i==startIndex){
            output = output + result
            i = i+2;
        }
    }
    console.log(words);
    console.log(output);
}

findTheNumber();