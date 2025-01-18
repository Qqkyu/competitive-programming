/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    const a = s.charAt(i);
    const b = s.charAt(j);

    if (!isAlphaNumeric(a)) {
      ++i;
    } else if (!isAlphaNumeric(b)) {
      --j;
    } else {
      if (a.toLowerCase() !== b.toLowerCase()) {
        return false;
      }
      ++i;
      --j;
    }
  }

  return true;
}

function isAlphaNumeric(char) {
  const charCode = char.charCodeAt(0);
  return (
    (charCode > 47 && charCode < 58) ||
    (charCode > 64 && charCode < 91) ||
    (charCode > 96 && charCode < 123)
  );
}
