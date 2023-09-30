function chunk(array, size) {
  // create an empty array to store the resulting chunks
  let chunked = [];

  // Iterate through each element in the input array
  for (element of array) {
    //get the last chunk in the chunked array
    const last = chunked[chunked.length - 1];

    //check if there is no last lunk or if it is already full (size elements)
    if (!last || last.length === size) {
      // if either condition is true, create a new chunk (an empty array)
      // and push the current element into it
      chunked.push([element]);
    } else {
      // if the last chunk is not full, add the element to it
      last.push(element);
    }
  }
  return chunked;
}
console.log(chunk([1, 2, 3, 4, 5, 6, 7], 2));
