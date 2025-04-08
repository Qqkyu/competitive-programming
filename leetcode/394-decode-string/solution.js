/**
 * @param {string} s
 * @return {string}
 */
function decodeString(s) {
  let result = "";

  let idx = 0;
  while (idx < s.length) {
    if (isDigit(s[idx])) {
      let num = s[idx];
      ++idx;

      while (isDigit(s[idx])) {
        num += s[idx];
        ++idx;
      }

      let groupBeg = idx;
      let openBrackets = 1;
      ++idx;
      while (openBrackets > 0) {
        if (s[idx] === "[") {
          ++openBrackets;
        } else if (s[idx] === "]") {
          --openBrackets;
        }
        ++idx;
      }

      result += decodeString(s.substring(groupBeg + 1, idx - 1)).repeat(parseInt(num));
    } else {
      result += s[idx];
      ++idx;
    }
  }

  return result;
}

function isDigit(char) {
  return char >= "0" && char <= "9";
}
