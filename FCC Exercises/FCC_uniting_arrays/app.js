function uniteUnique(arr) {

    var newArray = [];

    var keys = Object.keys(arguments);

    for (var i = 0; i < keys.length; i++) {
        for (var j = 0; j < arguments[i].length; j++) {
            if (newArray.indexOf(arguments[i][j]) < 0) {
                newArray.push(arguments[i][j]);
            }
        }
    }
    return newArray;
}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);