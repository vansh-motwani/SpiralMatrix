# Spiral Matrix: Find the Last Cell (Recursive Solution)

This repository contains a recursive solution to find the last cell of an `n x m` matrix during a spiral traversal. The solution efficiently uses recursion to reduce matrix boundaries until the last cell is located.

---

## Problem Statement

Given an `n x m` matrix, the goal is to determine the 0-indexed position (row, column) of the last cell in a spiral traversal. The spiral traversal starts from the top-left corner of the matrix, moving down, then right, up, and left, continuously shrinking the boundaries until the last cell is reached.

---

## Approach

The solution leverages recursion to find the last cell:
1. **Boundary Reduction**:
   - Increment `startRow` and `startCol` by 1 to shrink the top and left boundaries.
   - Decrement `endRow` and `endCol` by 1 to shrink the bottom and right boundaries.
2. **Base Cases**:
   - If one row or column remains, return the last cell in that row/column.
   - If only one cell remains, return it.
3. **Recursive Call**:
   - If no base case is met, make a recursive call with the updated boundaries.
4. **Edge Correction**:
   - After recursion ends, adjust the boundaries to correct the result if necessary.

---

## Time and Space Complexity

### Time Complexity:
- **O(min(n, m))**: Each recursive step reduces the matrix boundaries, and the recursion depth is proportional to the smaller dimension of the matrix.

### Space Complexity:
- **O(min(n, m))**: The recursion stack grows proportionally to the smaller dimension of the matrix.

---

## Examples

| Matrix Dimensions (n x m) | Last Cell (row, col) (Ans in 0-based indexing) |
|---------------------------|----------------------|
| 4 x 4                     | (1, 2)              |
| 6 x 4                     | (1, 2)              |
| 5 x 5                     | (2, 2)              |
| 5 x 6                     | (2, 3)              |
| 6 x 5                     | (3, 2)              |
| 7 x 5                     | (4, 2)              |
| 5 x 7                     | (2, 4)              |
| 1 x 1                     | (0, 0)              |

---

## Edge Cases

1. **1 x 1 Matrix**: A single cell matrix directly returns `(0, 0)`.
2. **Rectangular Matrices**: Handles matrices with `n ≠ m` efficiently by reducing boundaries until one dimension collapses.
3. **Empty Matrix**: Assumes valid inputs (`n ≥ 1` and `m ≥ 1`).

---

## How to Run

1. Save the code in a file named `spiralLastCell.js`.
2. Install [Node.js](https://nodejs.org/) if not already installed.
3. Run the file using the following command:
   ```bash
   node spiralLastCell.js
