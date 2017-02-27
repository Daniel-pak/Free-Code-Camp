function steamrollArray(arr) {
    // I'm a steamroller, baby
    var newArray = [];
    //    console.log(typeof(arr[]));
    //create a helper function
    for (var i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) == "number" || typeof (arr[i]) == "string") {
            newArray.push(arr[i]);
        } else if ((typeof (arr[i]) == "object") && (!Array.isArray(arr[i]))){
            newArray.push(arr[i])
        } else if ((typeof (arr[i]) == "object") && (Array.isArray(arr[i]))) {
            for (var j = 0; j < arr[i].length; j++) {
                if (typeof (arr[i][j]) == "number" || typeof (arr[i][j]) == "string") {
                    newArray.push(arr[i][j]);
                } else if ((typeof (arr[i][j]) == "object") && (Array.isArray(arr[i]))) {
                    for (var x = 0; x < arr[i][j].length; x++) {
                        if (typeof (arr[i][j][x]) == "number" || typeof (arr[i][j][x]) == "string") {
                            newArray.push(arr[i][j][x]);
                        } else if ((typeof (arr[i][j][x]) == "object") && (Array.isArray(arr[i]))) {
                            for (var y = 0; y < arr[i][j].length; y++) {
                                if (typeof (arr[i][j][x][y]) == "number" || typeof (arr[i][j][x][y]) == "string") {
                                    newArray.push(arr[i][j][x][y]);
                                } else if ((typeof (arr[i][j][x][y]) == "object") && (Array.isArray(arr[i]))) {
                                    console.log("Object here");
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return newArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]);
steamrollArray([1, [], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]]);