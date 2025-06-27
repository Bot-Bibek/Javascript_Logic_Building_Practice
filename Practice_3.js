/*
Write a function that returns the reverse of a string
Input : A string
Return : resever string
 */

function reserveString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reserveString("Bibek Bot"));


//Another Way

function reserveAString(inputString) {
    let reWord = "";
    for (let i = inputString.length - 1; i >= 0; i--){
        reWord = reWord + inputString[i]
    }
    return reWord
}

console.log(reserveAString("Yogesh"));
