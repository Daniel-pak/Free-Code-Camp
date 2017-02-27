function diffArray(arr1, arr2) {
    var larger;
    var smaller;
    var emptyArray = [];
    if (arr1.length > arr2.length) {
        larger = arr1;
        smaller = arr2;
        check(larger, smaller, emptyArray);
        check(smaller, larger, emptyArray);
    } else if (arr1.length < arr2.length) {
        larger = arr2;
        smaller = arr1;
        check(larger, smaller, emptyArray);
        check(smaller, larger, emptyArray);
    } else {
        smaller = arr1;
        larger = arr2;
        for (var i = 0; i < larger.length; i++) {
            if (smaller.indexOf(larger[i]) < 0) {
                emptyArray.push(larger[i]);
            }
            if (larger.indexOf(smaller[i]) < 0) {
                emptyArray.push(smaller[i]);
            }
        }
    }
    console.log(emptyArray);
}

function check(larger, smaller, emptyArray) {
    for (var i = 0; i < larger.length; i++) {
        if (smaller.indexOf(larger[i]) < 0) {
            if (larger[i] !== undefined) {
                emptyArray.push(larger[i]);
            }
        } else if (larger.indexOf(smaller[i]) < 0) {
            if (smaller[i] !== undefined) {
                emptyArray.push(smaller[i]);
            }
        }
    }
}
diffArray([1, "calf", 3, "piglet"], [7, "filly"])