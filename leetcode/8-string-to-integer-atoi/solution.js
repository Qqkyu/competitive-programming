const MAX_INT = Math.pow(2, 31) - 1;
const MIN_INT = -Math.pow(2, 31);

/**
 * @param {string} s
 * @return {number}
 */
function myAtoi(s) {
  let idx = 0;
  while (s[idx] === " ") {
    ++idx;
  }

  let sign = "+";
  if (s[idx] === "-" || s[idx] === "+") {
    sign = s[idx];
    ++idx;
  }

  while (s[idx] === "0") {
    ++idx;
  }

  let num = 0;
  while (idx < s.length && s[idx] >= "0" && s[idx] <= "9") {
    num *= 10;
    num += parseInt(s[idx]);
    ++idx;
  }

  if (sign === "-") {
    num *= -1;
  }

  return num > MAX_INT ? MAX_INT : num < MIN_INT ? MIN_INT : num;
}
