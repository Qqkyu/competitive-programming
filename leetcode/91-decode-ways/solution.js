const VALID_CHUNKS = new Set(Array.from({ length: 26 }, (_, idx) => (idx + 1).toString()));

/**
 * @param {string} s
 * @return {number}
 */
function numDecodings(s) {
  if (s[0] === "0") {
    return 0;
  }

  const n = s.length;
  const dp = new Array(n + 1).fill(0);
  dp[0] = dp[1] = 1;

  for (let i = 2; i <= s.length; ++i) {
    if (VALID_CHUNKS.has(s[i - 1])) {
      dp[i] += dp[i - 1];
    }
    if (VALID_CHUNKS.has(s.substring(i - 2, i))) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
}
