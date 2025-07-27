/**
 * Problem statement 8
 * 
 * Write a function that finds and prints the maximum element in an array of numbers.
 * Input: Array of numbers 
 * Return: Biggest number 
 * Do not use array sort
 */

function minMax(...array) {
  if (array.length === 0) {
    console.log("No numbers")
    return null
  }

  let max = array[0] //Assume the first element is maximum

  for (let i = 1; i < array.length; i++){
    if (array[i] > max) {
      max = array[i] //Update max if the a greater number is found
    }
  }

  console.log(`Max elements is ${max}`)
  return max;
}

minMax(5, 12, 3, 99, 100)

//Reason of using spread operator is we don't need to pass an array we can just pass numbers directly


//Another Way

function findtheBiggestNumber(arrayOfNumbers) {

  
  console.log(arrayOfNumbers)

  let biggestNumber = arrayOfNumbers[0]

  for (let i = 1; i < arrayOfNumbers.length; i++){
    if (arrayOfNumbers[i] > biggestNumber) {
      biggestNumber = arrayOfNumbers[i]
    }
  }

  
  return biggestNumber;
}

console.log(findtheBiggestNumber([1,2,3,4,5]))