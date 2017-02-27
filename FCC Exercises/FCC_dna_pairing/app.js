
function pairElement(str) {
    //split element and put into new array 
    var newArray = str.split(""); 
    console.log(newArray);
    var emptyArray = [];
    //loop through each element in the array 
    for (var i = 0; i < newArray.length; i++) { 
        //create new array
        var newPair = [];
        //if conditional for each letter to find the pair
        if (newArray[i] === "G") { 
            newPair.push(newArray[i]);
            newPair.push("C");
            //push original letter + pair
        } else if (newArray[i] === "A") { 
            newPair.push(newArray[i]);
            newPair.push("T");
        } else if (newArray[i] === "T") {
            newPair.push(newArray[i]);
            newPair.push("A");
        } else if (newArray[i] === "C"){ 
            newPair.push(newArray[i]);
            newPair.push("G")
        }
        emptyArray.push(newPair);
        //push entire array into new array 
    }
    return emptyArray;
    //return array
    
    
}

console.log(pairElement("GCG"));