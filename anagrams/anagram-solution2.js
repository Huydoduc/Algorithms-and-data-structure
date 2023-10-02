//check to see of two provided strings are anagrams of eachother.
//One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation. Consider capital letters to be the same as lower case
// example
// anagrams ('rail safety', 'fairy tales') --> true
// anagrams ('RAIL! SAFETY!', 'fairy tales') --> true

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

console.log(anagrams("rail safety", "fairy tales"));
