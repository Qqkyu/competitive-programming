const ROMAN_INTEGER_MAP = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  undefined: 0,
};

function romanToInt(s) {
  let result = 0;
  for (let i = 0; i < s.length; ++i) {
    if (ROMAN_INTEGER_MAP[s[i]] < ROMAN_INTEGER_MAP[s[i + 1]]) {
      result -= ROMAN_INTEGER_MAP[s[i]];
    } else {
      result += ROMAN_INTEGER_MAP[s[i]];
    }
  }
  return result;
}
