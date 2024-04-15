function romanToNumber(roman) {
    // Create a map of Roman numeral values
    const romanMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let result = 0;
    let prevValue = 0;
  
    for (let i = roman.length - 1; i >= 0; i--) {
      const currentValue = romanMap[roman[i]];
  
      // If the current value is greater than or equal to the previous value, add it to the result
      if (currentValue >= prevValue) {
        result += currentValue;
      } else {
        // If the current value is less than the previous value, subtract it from the result
        result -= currentValue;
      }
  
      // Update the previous value for the next iteration
      prevValue = currentValue;
    }
  
    return result;
  }
  
  export { romanToNumber };