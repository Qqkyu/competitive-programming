var lengthOfLastWord = function(s) { 
    let lastNonSpaceCharIdx;
    for (let i = s.length - 1; lastNonSpaceCharIdx == null; --i) {
        if (s.charAt(i) !== ' ') {
            lastNonSpaceCharIdx = i;
        }
    }

    for (let i = lastNonSpaceCharIdx - 1; i >= 0; i--) {
        if (s.charAt(i) === ' ') {
            return lastNonSpaceCharIdx - i;
        }
    }

    return lastNonSpaceCharIdx + 1;
};

