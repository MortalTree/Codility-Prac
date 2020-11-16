function fibonacciGenerator (n) {
    //TODO
    var output = [];
    for (var i = 0; i < n; i++) {
        if (i < 2) {
            output.push(i);
        } else {
            output.push(output[i - 1] + output[i - 2]);
        }
    }
    
    //Return an array of fibonacci numbers.
     console.log(output);
}

fibonacciGenerator(50)