// array A consisting of N integers is given
// array contains integers in the range [1 - N+1]
// which means exactly one element is missing


// GROSS
// let solution = function (A) {
//     A.sort()    
    
//     let result 
//     let missing

//     if (A[0] !== 1) {
//         return 1
//     }
    
//     for (count = 0; count < A.length - 1; count ++) {        
//         result = A[count] + 1
        
//         if (A[count + 1] != result) {                
//             missing = result
//             return missing  
//         }
//     }   
    
//     // return missing    
// }

// console.log(solution([1, 5, 2, 3, 9, 8, 7, 6]))
// console.log(solution([]))

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var size = A.length;
    var sum = (size + 1) * (size + 2) / 2;
    console.log(sum);
    for (i = 0; i < size; i++) {
        sum -= A[i];
        console.log(sum);
    }
    return sum;
}

console.log(solution([1, 5, 2, 3, 9, 8, 7, 6]))