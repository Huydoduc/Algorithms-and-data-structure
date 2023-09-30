function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index = index + size;
  }
  return chunked;
}
console.log(chunk([1, 2, 3, 4, 5, 6, 7], 2));
