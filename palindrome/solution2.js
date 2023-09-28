function palindrome(str) {
  let result = str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
  if (result) {
    result = "this is a palindrome";
  } else {
    result = "this is not a palindrome";
  }
  return result;
}
console.log(palindrome("abba"));
