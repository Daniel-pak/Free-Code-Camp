function dropElements(arr, func) {
    // Drop them elements.
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (!func(arr[i])) {
            arr.shift();
            i--;
        } else if (func(arr[i])) {
            return arr;
        } 
    }
    return newArray;
}


dropElements([1, 2, 3], function (n) {
    return n < 3;
});

console.log(dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
}));
console.log(dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
}));
console.log(dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
}));

console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}));