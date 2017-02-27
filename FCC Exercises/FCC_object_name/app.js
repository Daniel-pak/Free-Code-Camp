function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var notUsed = [];
    // source keys 
    //for loop to loop through the collection objects + source keys
    //set var collection keys to current iteration
    //if the objectkeys indexOf sourcekeys < 0, skip iteration
    //else match value using for in loop
    var collectionKeys;
    var sourceKeys = Object.keys(source);
    var sourceValue;



    for (var i = 0; i < collection.length; i++) {
        collectionKeys = Object.keys(collection[i]);
        //        console.log(collectionKeys);
        console.log(sourceKeys);
        for (var j = 0; j < sourceKeys.length; j++) {
            if (collectionKeys.indexOf(sourceKeys[j]) >= 0) {
                for (keys in source) {
                    sourceValue = source[keys]
                    if (collection[i].hasOwnProperty(sourceValue) == "false") {
                        collection.splice(i, 1);
                    }
                }
                continue;
            } else {
                collection.splice(i, 1)
            }
        }
    }
    console.log(collection);



    return arr;
}

whatIsInAName([{
    first: "Romeo",
    last: "Montague"
}, {
    first: "Mhercutio",
    last: null
}, {
    first: "Tybalt",
    last: "Capulet"
}], {
    last: "Capulet"
});

whatIsInAName([{
    "a": 1
}, {
    "a": 1
}, {
    "a": 1,
    "b": 2
}], {
    "a": 1
});

whatIsInAName([{
    "a": 1,
    "b": 2
}, {
    "a": 1
}, {
    "a": 1,
    "b": 2,
    "c": 2
}], {
    "a": 1,
    "b": 2
});

whatIsInAName([{
    "a": 1,
    "b": 2
}, {
    "a": 1
}, {
    "a": 1,
    "b": 2,
    "c": 2
}], {
    "a": 1,
    "c": 2
});