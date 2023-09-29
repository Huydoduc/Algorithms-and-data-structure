function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  if (n < 0) {
    return parseInt(reversed) * -1;
  } else {
    return parseInt(reversed);
  }
}

/* return parseInt(reversed) * Math.sign(n) if n is a negative number Math.sign(n) will return -1 if n is a positive number it will return 1*/
console.log(reverseInt(900));
console.log(reverseInt(-900));
