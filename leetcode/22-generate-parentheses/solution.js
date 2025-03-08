/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  const result = [];

  function recurse(parensLeft, curParens, openParens) {
    if (parensLeft === 0) {
      result.push(curParens + ")".repeat(openParens));
      return;
    }

    recurse(parensLeft - 1, curParens + "(", openParens + 1);
    for (let i = 1; openParens - i >= 0; ++i) {
      recurse(parensLeft - 1, curParens + ")".repeat(i) + "(", openParens - i + 1);
    }
  }

  recurse(n - 1, "(", 1);
  return result;
}
