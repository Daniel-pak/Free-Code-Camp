function myReplace(str, before, after) {
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var array = str.split(" ");
    var empty = [];
    var emptyString = "";
    for (var i = 0; i < array.length; i++) {
        if (array[i] === before) {
            if (upperCase.indexOf(before[0]) >= 0) {
                var index = lowerCase.indexOf(after[0]);
                emptyString += upperCase[index];
                for (var j = 1; j < after.length; j++) {
                    emptyString += after[j];
                    
                }
                after = emptyString;
            }
            empty.push(after);
        } else {
            empty.push(array[i]);
        }
    }
    var string = empty.join(" ");

    console.log(string);

}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")