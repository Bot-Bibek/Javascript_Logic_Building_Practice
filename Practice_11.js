/**
 * Problem Statement 11 
 * 
 * Write a function that counts and prints the number of vowels 
 * and consonants in given string 
 * Input: String 
 * Return : Vowel and Consonant count 
 * Vowel : a e i o u
 * Consonant : All other character 
 */

function isAlphabet(char) {
  return /^[A-Za-z]$/.test(char);
}

function countVowels(strings) {
  const vowels = "aeiouAEIOU";
  let v_count = 0;
  let c_count = 0;

  for (let i = 0; i < strings.length; i++) {
    const char = strings[i];
    if (isAlphabet(char)) {
      if (vowels.includes(char)) {
        v_count += 1;
      } else {
        c_count += 1;
      }
    }
  }

  return `Vowels: ${v_count}, Consonants: ${c_count}`;
}

console.log(countVowels("Hello World!"));



//Another Way

function counter(i_strings) {
  const vowels = "aeiou"
  const consonants = "bcdfghjklmnpqrstvwxyz"

  let vowels_c = 0
  let consonent_c = 0

  for (let i = 0; i < i_strings.length; i++){
    if (vowels.includes(i_strings[i])) {
      vowels_c++;
    }
    else if (consonants.includes(i_strings[i])) {
      consonent_c++;
    }
  }

  return `Total number of vowels: ${vowels_c}, Total number of consonent: ${consonent_c}`
}

console.log(counter("Hello"))