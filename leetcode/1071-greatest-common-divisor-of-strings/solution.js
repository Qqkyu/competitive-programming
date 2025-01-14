function gcdOfStrings(str1, str2) {
  for (let i = Math.min(str1.length, str2.length); i >= 1; --i) {
    if (str1.length % i !== 0 || str2.length % i !== 0) {
      continue;
    }

    const potentialResult = str1.substring(0, i);
    if (
      potentialResult.repeat(str1.length / i) === str1 &&
      potentialResult.repeat(str2.length / i) === str2
    ) {
      return potentialResult;
    }
  }

  return "";
}
