/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function licenseKeyFormatting(s, k) {
  let result = "";

  let curGroupLength = 0;
  for (let i = s.length - 1; i >= 0; --i) {
    if (s[i] === "-") {
      continue;
    }

    if (curGroupLength === k) {
      result = `${s[i].toUpperCase()}-${result}`;
      curGroupLength = 0;
    } else {
      result = `${s[i].toUpperCase()}${result}`;
    }

    curGroupLength++;
  }

  return result;
}
