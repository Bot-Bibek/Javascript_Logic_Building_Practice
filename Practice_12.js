/**
 * Problem Statement 12 
 * 
 * Write a function that finds all the factor of given number 
 * Input: number, positive integer 
 * Return Factor of a number 
 * Factor: Is a number that divides the given number evenly or exactly, leaving no remainder
 * 
 */

function findFactor(num) {

  if (typeof num !== "number" || num < 0) {
    throw new Error("The integer must be positive and in number format")
  }
  console.log(`The factor of ${num} is `)
  for (i = 1; i <= num; i++){
    if (num % i == 0) {
      console.log(i)
    }
  } 
  
}
findFactor(60)