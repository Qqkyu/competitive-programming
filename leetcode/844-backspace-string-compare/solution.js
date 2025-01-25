function backspaceCompare(s, t) {
  let i = s.length - 1;
  let sToRemove = 0;

  let j = t.length - 1;
  let tToRemove = 0;

  // todo: and or or?
  while (i >= 0 || j >= 0) {
    const sChar = s[i];
    const tChar = t[i];

    if (sToRemove === 0 && tToRemove === 0 && sChar !== "#" && tChar !== "#") {
      if (sChar !== tChar) {
        return false;
      } else {
        --i;
        --j;
      }
    } else {
      if (sChar === "#") {
        sToRemove++;
        --i;
      } else if (sToRemove > 0) {
        sToRemove--;
        --i;
      }

      if (tChar === "#") {
        tToRemove++;
        --j;
      } else if (tToRemove > 0) {
        tToRemove--;
        --j;
      }
    }
  }
}
