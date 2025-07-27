/**
 *Problem Statement 10
 * 
 * Write a function that returns the result of raising a given number to a specified power
 * Input : two numbers
 * Base 
 * Exponent
 * Return : Base to the power of exponent
 * Don't use Math.pow()
 */


function power(base, exponent) {
  // return base ** exponent;

  if (base < 0 || exponent < 0) {
    return `Enter the positive integer.`
  }

  let result = 1;
  for (let i = 1; i <= exponent; i++){
    result *= base;
    console.log(result)
  }

  return result;
}

console.log(power(2,-3))