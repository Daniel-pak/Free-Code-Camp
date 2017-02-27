function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var sourceKeys = Object.keys(source);
    //    console.log(sourceKeys);
    var collectionKeys;
    console.log(sourceKeys.length);
    if (sourceKeys.length > 1) {
        for (var i = 0; i < collection.length; i++) {
            collectionKeys = Object.keys(collection[i]);
            for (var j = 0; j < sourceKeys.length; j++) {
                if (collection[i].hasOwnProperty(sourceKeys[j]) === false) {
                    console.log("first cuts!")
                    collection.splice(i, 1);
                } else {
                    for (var x = 0; x < collectionKeys.length; x++) {
                        if (collection[i][collectionKeys[x]] === source[collectionKeys[x]]) {
                            continue;
                        } else {
                            console.log("second cuts!")
                            collection.splice(i, 1);
                        }
                    }
                }
            }
        }
        return collection;
    } else {
        for (var i = 0; i < collection.length; i++) {
            collectionKeys = Object.keys(collection[i]);
            for (var j = 0; j < sourceKeys.length; j++) {
                if (collection[i].hasOwnProperty(sourceKeys[j]) === false) {
                    collection.splice(i, 1);
                } else {
                    for (var x = 0; x < collectionKeys.length; x++) {
                        if (collection[i][sourceKeys[j]] === source[sourceKeys[j]]) {
                            continue;
                        } else {
                            collection.splice(i, 1);
                        }
                    }
                }
            }
        }
        return collection;
    }

    // Only change code above this line
    //    return arr;


}



console.log(whatIsInAName([{
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
}));

console.log(whatIsInAName([{
    first: "Romeo",
    last: "Montague"
}, {
    first: "Mercutio",
    last: null
}, {
    first: "Tybalt",
    last: "Capulet"
}], {
    last: "Capulet"
}));

console.log(whatIsInAName([{
    "a": 1
}, {
    "a": 1
}, {
    "a": 1,
    "b": 2
}], {
    "a": 1
}))

console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));