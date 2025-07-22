/*
Problem Statement 6
Write a function that returns the reverse of a string
Input : A string
Return : resever string
 */

function reserveString(str) {
  if (typeof str !== "string") {
    return "The input should be a string type.";
  }

  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  
  return reversed;
}

console.log(reserveString(1234));

//Another Way

function reserveAString(inputString) {
  if (typeof inputString !== "string") {
    return "The input should be a string type Gotta Damn the function is for string not number bro!!";
  }
  let reWord = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reWord = reWord + inputString[i];
  }
  return reWord;
}

console.log(reserveAString("Bibek Bot"));
