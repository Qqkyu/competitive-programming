/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstringTwoDistinct(s) {
  let firstLetter = s[0],
    secondLetter = undefined;
  let firstLetterCount = 1,
    secondLetterCount = 0;

  let result = 1;

  for (let i = 1; i < s.length; ++i) {
    if (s[i] === firstLetter) {
      firstLetterCount++;
    } else if (s[i] === secondLetter) {
      ++secondLetterCount;
    } else if (secondLetter == null) {
      secondLetter = s[i];
      ++secondLetterCount;
    } else {
      for (let j = i - firstLetterCount - secondLetterCount; firstLetterCount > 0 && secondLetterCount > 0; ++j) {
        if (s[j] === firstLetter) {
          --firstLetterCount;
        } else {
          --secondLetterCount;
        }
      }

      if (firstLetterCount === 0) {
        firstLetter = secondLetter;
        firstLetterCount = secondLetterCount;
      }

      secondLetter = s[i];
      secondLetterCount = 1;
    }

    result = Math.max(result, firstLetterCount + secondLetterCount);
  }

  return result;
}
