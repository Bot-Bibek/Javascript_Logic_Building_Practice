/**
 * Problem statement 9
 * Write a function that checks if a string is palindrome or not 
 * Input: A string
 * Return: Boolean, true if palindrome and false if not palindrome
 * A palindrome is a word that reads the same backward or forward
 */

const checkString = (strings) => {

  if (typeof strings !== "string") {
    return `Please enter string value`
  }

  const len = strings.length;

  for (let i = 0; i < len / 2; i++){

    if (strings[i] !== strings[len - 1 - i]) {
      return `It is not a palindrome`
    }
  }
  
  return `It is a palindrome`
}

console.log(checkString("madam"))
console.log(checkString("hello"))