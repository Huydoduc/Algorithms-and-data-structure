function fizzBuzz(n) {
  for (let i = 1; i < n + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      // is the number a multiple of 3 and 5?
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      //is the number a multiple of 3?
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(30);
