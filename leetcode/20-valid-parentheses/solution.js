const PARENS = {
  ")": "(",
  "}": "{",
  "]": "[",
};

function isOpeningParen(paren) {
  return paren === "(" || paren === "{" || paren === "[";
}

function isValid(s) {
  const stack = [];

  for (let i = 0; i < s.length; ++i) {
    const paren = s[i];

    if (isOpeningParen(paren)) {
      stack.push(paren);
    } else {
      const lastStackParen = stack.pop();

      if (PARENS[paren] !== lastStackParen) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
