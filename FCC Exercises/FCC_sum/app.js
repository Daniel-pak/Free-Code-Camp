
function sumAll(arr) {
  sorting(arr);
  console.log(arr);
    var num = arr[0]; 
    var number = num

    while (num < arr[1]) { 
        number += num + 1;
        num++
    }
        console.log(number);
}

function sorting(arr) { 
  arr.sort(function(a, b) { 
    return a - b;  
  });
}

sumAll([10, 5])