/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
  function dfs(x, y, wordIdx) {
    if (wordIdx === word.length) {
      return true;
    }
    if (word[wordIdx] !== board[x]?.[y]) {
      return false;
    }

    board[x][y] = null;

    const result = dfs(x - 1, y, wordIdx + 1) || dfs(x, y + 1, wordIdx + 1) || dfs(x + 1, y, wordIdx + 1) || dfs(x, y - 1, wordIdx + 1);

    board[x][y] = word[wordIdx];

    return result;
  }

  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[i].length; ++j) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
}
