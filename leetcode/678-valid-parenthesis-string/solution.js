/**
 * @param {string} s
 * @return {boolean}
 */
function checkValidString(s) {
  let openParensMin = 0,
    openParensMax = 0;

  for (let char of s) {
    if (char === "(") {
      ++openParensMin;
      ++openParensMax;
    } else if (char === ")") {
      --openParensMin;
      --openParensMax;
    } else {
      --openParensMin;
      ++openParensMax;
    }

    if (openParensMax < 0) {
      return false;
    }

    openParensMin = Math.max(0, openParensMin);
  }

  return openParensMin === 0;
}
