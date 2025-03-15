/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
function encode(strs) {
  const wordsLen = strs.length;
  for (let i = wordsLen - 1; i >= 0; --i) {
    strs.push(`|${strs[i].length}`);
  }
  strs.push(`|${wordsLen}`);
  return strs.join("");
}

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
function decode(s) {
  let idx = s.length - 1;

  let wordsLen = "";
  while (s[idx] !== "|") {
    wordsLen = s[idx] + wordsLen;
    --idx;
  }
  wordsLen = +wordsLen;

  const words = new Array(wordsLen);
  let nextWordStart = 0;
  for (let i = 0; i < wordsLen; ++i) {
    idx--;

    let wordLen = "";
    while (s[idx] !== "|") {
      wordLen = s[idx] + wordLen;
      --idx;
    }
    wordLen = +wordLen;

    words[i] = s.substring(nextWordStart, nextWordStart + wordLen);
    nextWordStart += wordLen;
  }

  return words;
}
