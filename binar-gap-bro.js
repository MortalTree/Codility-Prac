function solution(N) {

    // Assumption checks
    if (N < 1 || N > 2147483647) {
      console.log(`Invalid number provided.`);
      return false;
    }
  
    // Convert int to binary
    const binVal = N.toString(2);
  
    // Split the string
    const gapArray = binVal.split("1");
    // console.log(gapArray);
    // Now check if string ends in a 0
    // If it does, remove the last element of the array as it is not a valid binary gap
    const endOfBinVal = binVal.substring(binVal.length - 1);
  
    if (endOfBinVal === '0') {
      // Remove the last element of gapArray
      gapArray.pop();
    }
  
    let gapLength = 0;
  
    // Now we loop through and pull out the longest binary gap
    gapArray.forEach((gap) => {
      if (gap.length > gapLength) {
        gapLength = gap.length;
      }
    });
  
    if (gapLength > 0) {
      console.log(`Binary representation of ${N} is ${binVal}. Maximum binary gap: ${gapLength}`);
    } else if (gapLength === 0) {
      console.log(`${binVal} has no valid binary gaps`);
    }
  }
  
  solution(22909);