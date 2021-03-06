//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
//
//The range will be an array of two numbers that will not necessarily be in numerical order.
//
//e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

//create a function 
//sort the array - min - max
//for loop starting at min and ending at <= max
//if it is not divisible, increase number and check again 
//if it is, then move up to another increment
//at end of loop, set iteration back to 0 to check every number again; 


function smallestCommons(arr) {

    arr.sort(function (a, b) {
        return b - a;
    });

    var newArr = [];
    for (var i = arr[0]; i >= arr[1]; i--) {
        newArr.push(i);
    }

    var quot = 0;
    var loop = 1;
    var n;

    do {
        quot = newArr[0] * loop * newArr[1];
        for (n = 2; n < newArr.length; n++) {
            if (quot % newArr[n] !== 0) {
                break;
            }
        }

        loop++;
    } while (n !== newArr.length);

    return quot;

}


console.log(smallestCommons([5, 1]));