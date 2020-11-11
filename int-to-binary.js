// function to convert the integer to a binary string
let binVal = function (input) {
    // initialise an empty array
    let output = []
    // initialise an emptry string
    let binString = ''
    // keep track of original input
    let initialNumber = input

    // loop while integer > 1
    while (input > 1) {
        // add the mod remainder to the array
        output.push(Math.floor(input % 2))
        // divide integer by 2 for next mod
        input /= 2
    }

    // reverse the array - binary number is represented from the '1' field in the number
    let outputRev = output.reverse()
    
    // loop through the reversed array, and build a string
    for (let arrCnt = 0; arrCnt <= output.length - 1; arrCnt ++) {
        binString = binString.concat(outputRev[arrCnt])
    }

    // return `${initialNumber} represented in binary is ${binString}`  
    return binString
}

// function to count the binary gap of an integer

let binGap = function (number) {
    // first convert the number to binary
    let useNumber = binVal(number)
    console.log(useNumber)   
    let binCounter = 0
    let maxBin = 0

    // loop through the string
    for (let count = 0; count <= useNumber.length -1; count ++) {
        // if 1, reset counter. else add 1 to counter   
        let chChar = useNumber.charAt(count)
        
        // check if last digit
        if (count != useNumber.length -1) {
            if (chChar == 1) {
                binCounter = 0
            } else {
                binCounter +=1
                if (binCounter > maxBin) {
                    maxBin = binCounter
                }
            }            
        } else {
            if (chChar == 0) {
                binCounter = 0
            }
        }

        // if (chChar == 1) {            
        //     if (count != useNumber.length -1) {
        //         binCounter = 0
        //     } 
        // } else {
        //     binCounter +=1
            
        //     if (count == useNumber.length -1) {
        //         binCounter = 0
        //     } else {
        //         if (binCounter > maxBin) {
        //             maxBin = binCounter
        //         }
        //     }            
        // }
    }

    if (binCounter == 0) {
        console.log(`${number} in binary is ${useNumber} and has no binary gap`)
    } else {
        console.log(`${number} in binary is ${useNumber} and has a maximum binary gap of ${maxBin}`)
    }
}

// console.log(binVal(15))
binGap(529)
binGap(46)