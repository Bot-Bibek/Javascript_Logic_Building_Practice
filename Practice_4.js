/**
 * Problem Statement 7
 * Write a function that calculate factorial of given number
 * Input : A number, positive integer
 * Return: Factorial of that number 
 * multiplication of all positive integers from 1 to given number
 */

function factorial(num) {
  if (num < 0) {
    console.log("Please enter the positive value")
    return
  }

  let fact = 1
  for (i = 1; i <= num; i++){
    fact*=i
  }
  console.log(`Factorial of ${num} is ${fact}`)
}

factorial(-5)