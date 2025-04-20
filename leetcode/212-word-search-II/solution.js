const DIRECTIONS = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
function findWords(board, words) {
  const m = board.length,
    n = board[0].length;

  const trie = new Trie();
  words.forEach((word) => trie.addWord(word));

  const result = [];

  function recurse(trieNode, word, x, y) {
    const char = board[x][y];
    if (trieNode[char] == null) {
      return;
    }

    word += char;
    if (trieNode[char].isWord) {
      result.push(word);
      trie.removeWord(word);

      if (trieNode[char] == null) {
        return;
      }
    }

    board[x][y] = "X";

    DIRECTIONS.forEach(([xOffset, yOffset]) => {
      const newX = x + xOffset,
        newY = y + yOffset;
      if (newX >= 0 && newX < m && newY >= 0 && newY < n && board[newX][newY] !== "X") {
        recurse(trieNode[char], word, newX, newY);
      }
    });

    board[x][y] = char;
  }

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      recurse(trie.trie, "", i, j);
    }
  }

  return result;
}

class Trie {
  trie = {};

  addWord(word) {
    let node = this.trie;
    for (const char of word) {
      if (node[char] == null) {
        node[char] = {};
      }
      node = node[char];
    }
    node.isWord = true;
  }

  removeWord(word, node = this.trie, depth = 0) {
    if (depth === word.length) {
      delete node.isWord;

      if (this.isEmpty(node)) {
        node = null;
      }

      return node;
    }

    node[word[depth]] = this.removeWord(word, node[word[depth]], depth + 1);

    if (this.isEmpty(node)) {
      node = null;
    }

    return node;
  }

  isEmpty(node) {
    return Object.keys(node).length === 0;
  }

  get trie() {
    return this.trie;
  }
}
