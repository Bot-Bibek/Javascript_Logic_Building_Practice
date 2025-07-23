/**
 * Problem Statement 7
 * Write a function that tells if the provided year is a leap year or not 
 * input : A number, positive interger > 1900,2023,2033
 * Return: true if leap year, false if not leap year
 * Leap Year:
 * Every 4th year is a leap year 
 * leap year has 366 days 
 * normal year has 365 days
 * February has 28 days or 29 days 
 * Ignoring the exception of 1700, 1800 and 1900
 */

function YearChecker(year) {
  if (year < 0) {
    throw new Error(`The provided number should be in positive`)
  }
  if (typeof year !== "number") {
    throw new Error(`The input value should be in number`)
  }

  if (year % 4 == 0) {
    return `The ${year} is leap year.`
  } else {
    return `The ${year} is not a leap year.`
  }
}

// console.log(YearChecker("Hello"))
// console.log(YearChecker(-1))
console.log(YearChecker(2000))
console.log(YearChecker(2005))