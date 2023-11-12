/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const magazineAvailableChars = new Map();
  for (let i = 0; i < magazine.length; ++i) {
    const char = magazine.charAt(i);
    const charOccurences = magazineAvailableChars.get(char) ?? 0;
    magazineAvailableChars.set(char, charOccurences + 1)
  }

  for (let i = 0; i < ransomNote.length; ++i) {
    const char = ransomNote.charAt(i);
    const magazineCharsLeft = magazineAvailableChars.get(char) ?? 0;
    if (magazineCharsLeft === 0) {
      return false;
    } else {
      magazineAvailableChars.set(char, magazineCharsLeft - 1);
    }
  }

  return true;
};

