var WordDictionary = function () {
  this.trie = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.trie;
  for (const char of word) {
    if (node[char] == null) {
      node[char] = {};
    }
    node = node[char];
  }

  node.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  return nestedSearch(this.trie, word, 0);
};

function nestedSearch(node, word, idx) {
  if (idx === word.length) {
    return node.isWord === true;
  }

  const char = word[idx];

  if (char === ".") {
    for (const child in node) {
      if (child !== "isWord" && nestedSearch(node[child], word, idx + 1)) {
        return true;
      }
    }

    return false;
  } else if (node[char] == null) {
    return false;
  } else {
    return nestedSearch(node[char], word, idx + 1);
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
