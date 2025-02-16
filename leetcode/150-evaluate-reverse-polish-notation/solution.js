/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
  return tokens.reduce((stack, token) => {
    if (token == "+" || token == "-" || token == "*" || token == "/") {
      const rhs = stack.pop(),
        lhs = stack.pop();
      stack.push(OPERATOR_FUNCTION[token](lhs, rhs));
    } else {
      stack.push(parseInt(token));
    }
    return stack;
  }, [])[0];
}

const OPERATOR_FUNCTION = {
  "+": (lhs, rhs) => lhs + rhs,
  "-": (lhs, rhs) => lhs - rhs,
  "*": (lhs, rhs) => lhs * rhs,
  "/": (lhs, rhs) => Math.trunc(lhs / rhs),
};
