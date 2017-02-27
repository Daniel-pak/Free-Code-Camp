function sumPrimes(num) {
    var total = 2;
    var number = 3;
    if (num < 2) {
        return false;
    }

    while (number <= num) {
        for (var i = 2; i <= num; i++) {
            if (number % i === 0 && i !== number) {
                break;
            }
            if (number % i === 0 && i === number) { 
                total += number;
                break;
            }
        }
        number++;
    }
    return total;
}

sumPrimes(10);
sumPrimes(977)