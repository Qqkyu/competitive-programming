/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase();
  let [i, j] = [0, s.length - 1];
  while (i <= j) {
    const [a, b] = [s.charAt(i), s.charAt(j)];
    if (!isAlphanumeric(a)) {
      i++;
      continue;
    }
    if (!isAlphanumeric(b)) {
      j--;
      continue;
    }

    if (a === b) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};

function isAlphanumeric(char) {
  return char.match(/[a-z|A-Z|0-9]/i);
}

