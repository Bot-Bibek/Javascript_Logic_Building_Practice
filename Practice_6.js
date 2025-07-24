/**
 * Problem Statement - 8
 * Write a function that calculates and prints the sum of the digit of a given numbers
 * Input: A number, positive intger -> 12,34,123,1234
 * Return: Sum of all digit
 */

const SumOfDigit = (num) => {
  let sum = 0;
  while (num !== 0) {
    let last = num % 10;

    sum += last

    num = Math.floor(num / 10)
  }
  return sum
  
}

console.log(SumOfDigit(1010))