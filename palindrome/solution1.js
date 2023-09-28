function palindrome(str) {
  const reversed = str.split("").reverse().join("");
  let result = "";
  if (str === reversed) {
    result = "this is a palindrome";
  } else {
    result = "this is not a palindrome";
  }
  return result;
}

console.log(palindrome("abb"));
