/*
Problem statement 4
Write a function that tells if a given number is even or odd
 */

function numteller(num) {
    if (num % 2 == 0) {
        console.log(`${num} number is Even `);
    } else {
        console.log(`${num} number is Odd`);
    };
};

numteller(3);
numteller(-1);
numteller(-2)
numteller(0)