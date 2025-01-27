//O(1) space & time complexity 

/**
 * Calculates the floor value of a divided by b.
 * @param {number} a - The numerator.
 * @param {number} b - The denominator.
 * @returns {number} - The floor value of a / b.
 */
function floor_division(a, b) {
  return Math.floor(a / b);
}

/**
 * Determines the last cell reached during a spiral traversal of an n x m matrix,
 * following the traversal order D -> R -> U -> L (Down, Right, Up, Left).
 *
 * @param {number} n - The number of rows in the matrix.
 * @param {number} m - The number of columns in the matrix.
 * @returns {{row: number, col: number}} - The 0-indexed row and column of the last cell reached.
 */
function LastCell(n, m) {
  let row = n,
    col = m;
  let ans_row, ans_col;
  if (row === col) {
    if (row % 2 === 0) ans_row = floor_division(row, 2);
    else ans_row = floor_division(row + 1, 2);
    if (col % 2 === 0) ans_col = floor_division(col, 2) + 1;
    else ans_col = floor_division(col + 1, 2);
  } else if (row > col) {
    if (col % 2 === 0) {
      ans_row = floor_division(col, 2);
      ans_col = floor_division(col, 2) + 1;
    } else {
      ans_row = row - floor_division(col, 2);
      ans_col = floor_division(col + 1, 2);
    }
  } else {
    if (row % 2 === 0) {
      ans_row = floor_division(row, 2);
      ans_col = col - floor_division(row - 1, 2);
    } else {
      ans_row = floor_division(row + 1, 2);
      ans_col = col - floor_division(row, 2);
    }
  }
  //converting it into 0 indexed base
  ans_col -= 1;
  ans_row -= 1;
  return { ans_row, ans_col };
}

// Example usage:
console.log(LastCell(4, 4)); // ans: 1,2
console.log(LastCell(6, 4)); // ans: 1,2
console.log(LastCell(5, 5)); // ans: 2,2
console.log(LastCell(5, 6)); // ans: 2,3
console.log(LastCell(6, 5)); // ans: 3,2
console.log(LastCell(6, 4)); // ans: 1,2
console.log(LastCell(7, 5)); // ans: 4,2
console.log(LastCell(5, 7)); // ans: 2,4
//edge case 1 1
console.log(LastCell(1, 0)); // ans: 0,0
