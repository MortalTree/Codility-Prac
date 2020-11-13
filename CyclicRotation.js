/* 
Function accepts array A, integer K
Function must shift the array elements K number of times
*/

let solution = function (A, K) {
    const min = 0
    const max = 100

    // if integer is valid
    if (A.length >= min && A.length <= max) {
        // calculate slice point
        K = (A.length - (K % A.length))
        console.log(K)
        return [...A.slice(K), ...A.slice(0, K)]        
    }
}

console.log(solution([1, 2, 3], 100))
console.log(solution([3, 8, 9, 7, 6], 3))