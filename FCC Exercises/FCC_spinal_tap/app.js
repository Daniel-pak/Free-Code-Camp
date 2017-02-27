function spinalCase(str) {

    var array = str.match(/[A-Z]*[a-z]+|[-]|\s|[_]/g);
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] === " " || array[i] === "_" || array[i] === "-") {
            continue;
        } else {
            newArray.push(array[i]);
        }
    }
    
    var anotherOne = newArray.join("-").toLocaleLowerCase();
    
    return anotherOne;

}

spinalCase('This Is Spinal Tap');
spinalCase("The_Andy_Griffith_Show");
spinalCase("AllThe-small Things");