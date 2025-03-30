/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  const rowDigits = Array.from(new Array(9), () => new Set());
  const colDigits = Array.from(new Array(9), () => new Set());
  const subBoxesDigits = Array.from(new Array(9), () => new Set());

  for (let row = 0; row < 9; ++row) {
    let subBoxIdx = row <= 2 ? 0 : row <= 5 ? 3 : 6;

    for (let col = 0; col < 9; ++col) {
      const digit = board[row][col];

      if (digit !== ".") {
        if (rowDigits[row].has(digit) || colDigits[col].has(digit) || subBoxesDigits[subBoxIdx].has(digit)) {
          return false;
        }

        rowDigits[row].add(digit);
        colDigits[col].add(digit);
        subBoxesDigits[subBoxIdx].add(digit);
      }

      if (col === 2 || col === 5) {
        subBoxIdx++;
      }
    }
  }

  return true;
}
