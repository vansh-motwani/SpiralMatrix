/**
 * Finds the last cell in a spiral traversal of an n x m matrix using recursion.
 * @param {number} n - The number of rows in the matrix.
 * @param {number} m - The number of columns in the matrix.
 * @param {number} startRow - The starting row of the submatrix (default: 0).
 * @param {number} startCol - The starting column of the submatrix (default: 0).
 * @param {number} endRow - The ending row of the submatrix (default: n-1).
 * @param {number} endCol - The ending column of the submatrix (default: m-1).
 * @returns {{row: number, col: number}} - The 0-indexed row and column of the last cell.
 */
function findLastCellRecursive(n, m, startRow = 0, startCol = 0, endRow = n - 1, endCol = m - 1) {
    startRow += 1;
    startCol += 1;
    endCol -= 1;
    endRow -= 1;

    // Handling recursion
    if (startRow < endRow && startCol < endCol) return findLastCellRecursive(n, m, startRow, startCol, endRow, endCol);
    // Handling edge cases/base cases
    else if (startRow === endRow && startCol === endCol) {
        return { row: startRow, col: startCol };
    } else if (startRow === endRow) {
        return { row: startRow, col: endCol };
    } else if (startCol === endCol) {
        return { row: endRow, col: startCol };
    } else {
        startRow -= 1;
        endCol += 1;
        return { row: startRow, col: endCol };
    }
}

// Example usage
console.log(findLastCellRecursive(4, 4)); // { row: 1, col: 2 }
console.log(findLastCellRecursive(6, 4)); // { row: 1, col: 2 }
console.log(findLastCellRecursive(5, 5)); // { row: 2, col: 2 }
console.log(findLastCellRecursive(5, 6)); // { row: 2, col: 3 }
console.log(findLastCellRecursive(6, 5)); // { row: 3, col: 2 }
console.log(findLastCellRecursive(7, 5)); // { row: 4, col: 2 }
console.log(findLastCellRecursive(5, 7)); // { row: 2, col: 4 }
// Edge case
console.log(findLastCellRecursive(1, 0)); // { row: 0, col: 0 }
