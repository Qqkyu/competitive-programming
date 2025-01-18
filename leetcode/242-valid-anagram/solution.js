function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const chars = new Map();

  for (let i = 0; i < s.length; ++i) {
    chars.set(s[i], (chars.get(s[i]) ?? 0) + 1);
    chars.set(t[i], (chars.get(t[i]) ?? 0) - 1);
  }

  for (const [, occurrences] of chars) {
    if (occurrences !== 0) {
      return false;
    }
  }

  return true;
}
