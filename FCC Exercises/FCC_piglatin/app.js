function translatePigLatin(str) {
    var vowel = "aeiou";
    var emptyStr = "";
    var consonance = 0;

    if (vowel.indexOf(str[0]) < 0) {
        if ((vowel.indexOf(str[0]) < 0) && (vowel.indexOf(str[1])) < 0) {
            if (((vowel.indexOf(str[0]) < 0) && (vowel.indexOf(str[1])) < 0) && (vowel.indexOf[str[2]]) < 0) {
                consonance += 3;
            } else {
                consonance += 2;
            }
        } else {
            consonance += 1
        }
    }

    console.log(consonance);

    for (var i = consonance; i < str.length; i++) {
        if (consonance === 0) {
            return str += "way";
        } else if (consonance > 0) {
            emptyStr += str[i];
        }
    }
    
    for (var j = 0; j < consonance; j++) { 
        emptyStr += str[j]
    }
    
    emptyStr += "ay";
    return emptyStr;
}

console.log(translatePigLatin("consonant"))
console.log(translatePigLatin("algorithm"))
console.log(translatePigLatin("california"))