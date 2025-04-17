const DIRECTIONS = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solve(board) {
  function explore(x, y) {
    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length || board[x][y] !== "O") {
      return;
    }

    board[x][y] = "S";

    for (let [xOffset, yOffset] of DIRECTIONS) {
      explore(x + xOffset, y + yOffset);
    }
  }

  for (let col = 0; col < board[0].length; ++col) {
    if (board[0][col] === "O") {
      explore(0, col);
    }
    if (board[board.length - 1][col] === "O") {
      explore(board.length - 1, col);
    }
  }

  for (let row = 0; row < board.length; ++row) {
    if (board[row][0] === "O") {
      explore(row, 0);
    }
    if (board[row][board[0].length - 1] === "O") {
      explore(row, board[0].length - 1);
    }
  }

  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[0].length; ++j) {
      if (board[i][j] === "S") {
        board[i][j] = "O";
      } else {
        board[i][j] = "X";
      }
    }
  }
}
