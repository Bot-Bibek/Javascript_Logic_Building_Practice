/**
 * Write a function that generates and prints a multiplication tables for a given number up to a specified range
 * Input : 2 Positive numbers 
 * Table of 
 * table till
 * Return: Nothing
 */

function table(tableOf, tableTill) {
  var tableOf;
  if (typeof tableOf !== "number" || tableOf < 0) {
    throw new Error("The input value must be in number or positive")
  
}
  for (let i = 1; i <= tableTill; ++i){
    console.log(`${tableOf} * ${i} = ${tableOf * i}`)
  }

  
}
table(5, 10)