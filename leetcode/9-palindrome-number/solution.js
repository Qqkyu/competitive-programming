function isPalindrome(x) {
  if (x < 0) {
    return false;
  }

  let reversedNum = 0;
  for (let num = x; num > 0; num = Math.floor(num / 10)) {
    reversedNum = reversedNum * 10 + (num % 10);
  }

  return x === reversedNum;
}
