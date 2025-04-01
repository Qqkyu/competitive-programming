/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
  const dp = new Array(s.length + 1);
  dp[0] = true;

  for (let i = 0; i < s.length; ++i) {
    if (dp[i]) {
      wordDict.forEach((word) => {
        if (s.substring(i, i + word.length) === word) {
          dp[i + word.length] = true;
        }
      });
    }
  }

  return dp[s.length] ?? false;
}
