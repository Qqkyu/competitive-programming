function solution(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let lo = 1;
    let hi = n;

    let firstBadVersion = n;

    while (lo <= hi) {
      const m = lo + Math.floor((hi - lo) / 2);
      if (isBadVersion(m)) {
        firstBadVersion = m;
        hi = m - 1;
      } else {
        lo = m + 1;
      }
    }

    return firstBadVersion;
  };
}
