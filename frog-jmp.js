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
    let min = 1
    let max = 1000000

    // check validity of parameters
    if ((X >= min && X <= max) && (Y >= min && Y <= max) && (D >= min && D <= max)) {
        // check that X <> Y 
        if (X < Y) {
            // use a while loop
            let jmps = 0
            while (X <= Y) {
                X += D
                jmps += 1
            }
            return jmps
        } else {
            return 'Frog is already at or past destination'
        }
        
    } else {
        return 'Invalid parameter passed'
    }
}

console.log(solution(1, 100, 3))