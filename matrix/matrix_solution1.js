// write a function that accepts an integer N and returns a NxN spiral matrix

function matrix(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let starColumn = 0;
  let endColumn = n - 1;
  let starRow = 0;
  let endRow = n - 1;

  while (starColumn <= endColumn && starRow <= endRow) {
    // Top row
    for (let i = starColumn; i <= endColumn; i++) {
      results[starRow][i] = counter;
      counter++;
    }
    starRow++;

    // Right column

    for (let i = starRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;
    //Bottom row
    for (let i = endColumn; i >= starColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;
    // start column
    for (let i = endRow; i >= starRow; i--) {
      results[i][starColumn] = counter;
      counter++;
    }
    starColumn++;
  }

  return results;
}

console.log(matrix(3));
