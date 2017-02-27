function sumFibs(num) {

    if (num > 2) {
        var sequence = [1, 1];
    } else { 
        return 2;
    }
    var count = 0;
    for (var i = 0; i < num - 2; i++) {
        var sum = 0;
        sum += sequence[i];
        sum += sequence[i+1];
        sequence.push(sum);
    }
    for (j = 0; sequence[j] <= num; j++) { 
        if (sequence[j] % 2 !== 0) { 
            count += sequence[j];
        }
    }
    return count;

}

console.log(sumFibs(75025));