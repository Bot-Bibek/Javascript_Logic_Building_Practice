/*
Problem statement 4
Write a function that tells if a given number is even or odd
 */

function numteller(num) {
  if (num % 2 == 0) {
    console.log(`${num} number is Even `);
  } else {
    console.log(`${num} number is Odd`);
  }
}

numteller(3);
numteller(-1);
numteller(-2);
numteller(0);

/**
 Problem statement 5
 Write a function that finds and prints the smallest 
 number among three given numbers.
 */

function smallNum(a, b, c) {
  // Check if all inputs are numbers
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    return "Invalid input: All inputs must be numbers.";
  }

  if (a <= b && a <= c) {
    return `smallest number is ${a}`;
  } else if (b <= a && b <= c) {
    return `smallest number is ${b}`;
  } else {
    return ` smallest number is ${c}`;
  }
}

console.log(smallNum(2, 4, 5));
console.log(smallNum(-1, 4, 5));
console.log(smallNum(-1, -6, 9));
console.log(smallNum(3, 3, 3));
console.log(smallNum(3, 3, 1));
console.log(smallNum(3, 3, 4));
console.log(smallNum("w", "w", "w"));
console.log(smallNum("3", "3", "3"));
