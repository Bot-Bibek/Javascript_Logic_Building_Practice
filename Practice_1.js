//Rules
/*
Understand the problem statement
try to solve the problem for minimum 10-15 minutes
compare the solution
try again if you did not get result correct
*/

/*
Problem statement - 1
Write a program that prints "Hello World" on the console
*/

//In basic way
console.log(`Hello World`);

//In function way
function greeting() {
  return `Hello World`;
}
console.log(greeting());

/*
Problem Statement - 2
Write a function that takes two numbers as input and prints their sum
 */

function sumOfNum(a, b) {
  const sumOfNum = a + b;
  console.log(sumOfNum);
}

sumOfNum(5, 5);
sumOfNum(123, 234);
sumOfNum(-1, 2);
sumOfNum(-2, -2);
sumOfNum(3, 0);
sumOfNum(1.3, 2);
sumOfNum(1.5, 1.5);

/*
Problem statement 3

Write a function that calculates and print the area of a 
rectangle given its lenght and width
*/

function areaOfRectangle(length, width) {
  //Validation
  if (length <= 0) {
    throw new RangeError(`Length Should be a positive number`);
  }
  if (width <= 0) {
    throw new RangeError(`Width should be a positive number`);
  }

  const areaOfRectangle = length * width;
  console.log(`The area of rectangle is ${areaOfRectangle}`);
}

areaOfRectangle(10, 30);
// areaOfRectangle(-20, -40)
// areaOfRectangle(-10, 10)
// areaOfRectangle(50.10, 20.10)
