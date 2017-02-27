function fearNotLetter(str) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var alphaArray = alphabet.split("");
    var stringArray = str.split("");

    var firstLetter = alphaArray.indexOf(stringArray[0]);
    console.log(firstLetter);
    
    for (var i = 0; i < stringArray.length; i++) {
        if (stringArray[i] !== alphaArray[i + firstLetter]) {
            return alphaArray[i + firstLetter];
        } 
    }
    return undefined;
}


console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"))
console.log(fearNotLetter("bcd"))