var sentence = "This   sentence   has   too    many   spaces."
function fixSentence(){
    const space = /\s+/g;
    var newSentence = sentence.replace(space, " ").replace(/\shas\s/i, " had ");
    sentence = newSentence;
    console.log(sentence);
}
fixSentence();