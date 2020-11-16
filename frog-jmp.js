// frog pos = X
// target >= Y
// distance = D
// return minimal jumps to get from X to Y, jumping only D distance

/* 
    eg 
    X = 10
    Y = 85
    D = 30
    function return = 3
*/

let solution = function (X, Y, D) {
    
    // use a while loop
    let dist = Y - X
    let jmps = Math.ceil(dist/D)
        
    return jmps        
}

console.log(solution(1, 100, 3))
console.log(solution(1, 5, 2))