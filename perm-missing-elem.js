// array A consisting of N integers is given
// array contains integers in the range [1 - N+1]
// which means exactly one element is missing


// function to check for duplicates in the array
let checks = function (arr) {
    let result = false    
    let count2 = 0

    for (count = 0; count < arr.length; count ++) {
        // Duplicates in the array                 
        if (arr[count] == arr[count + 1]) {            
            result = true
        }
        
        // Integer range
        if (arr[count] > arr.length + 1) {        
            result = true
        }
    }

    // Array range
    if (result = false) {
        if (arr.length >= 0 && arr.length <= 100000) {
            result = true
        }
    }

    return result
}

let solution = function (A) {
    A.sort()    
    let valid = checks(A)
    
    // check for duplicates
    if (valid == false) {
        let result 
        let missing = null
        for (count = 0; count < A.length - 1; count ++) {
            result = A[count] + 1

            if (A[count + 1] != result) {                
                missing = result
                break
            }
        }   

        if (missing != null) {                
            return `The missing element is ${missing}`
        }  else {
             return 'There is no missing value'
         }                 
    } else {
        return 'Invalid parameter'
    }    
}

console.log(solution([4, 5, 2, 3, 9, 8, 7, 6]))