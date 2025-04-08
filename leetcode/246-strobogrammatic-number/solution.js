/**
 * @param {string} num
 * @return {boolean}
 */
function isStrobogrammatic(num) {
  for (let i = 0, j = num.length - 1; i <= j; ++i, --j) {
    const a = num[i],
      b = num[j];

    if (a !== b) {
      if ((a === "6" && b === "9") || (a === "9" && b === "6")) {
        continue;
      }
      return false;
    } else {
      if ((a === "0" && b === "0") || (a === "8" && b === "8") || (a === "1" && b === "1")) {
        continue;
      }
      return false;
    }
  }

  return true;
}
