function truthCheck(collection, pre) {
    // Is everyone being true?
    
    for (var i = 0; i < collection.length; i++) { 
        if (!collection[i].hasOwnProperty(pre) || collection[i][pre] === 0 || collection[i][pre] === null || (typeof(collection[i][pre]) == "number" && isNaN(collection[i][pre]))|| collection[i][pre] === ""|| collection[i][pre] == undefined) { 
            return false;
        }      
    }  
    return true;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));

console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat"));

console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"));

console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single"));

console.log(truthCheck([{"single": "double"}, {"single": undefined}], "single"));

console.log(truthCheck([{"single": ""}, {"single": "double"}], "single"));

console.log(truthCheck([{"single": "yes"}], "single"))