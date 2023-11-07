/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const charIdxs = [...haystack].reduce((idxs, char, charIdx) => {
        const charIdxs = idxs.get(char);
        if (charIdxs == null) {
            idxs.set(char, new Set([charIdx]))
        } else {
            charIdxs.add(charIdx);
        }
        return idxs;
    }, new Map());
    
    const firstNeedleCharIdxs = charIdxs.get(needle.at(0));

    if (firstNeedleCharIdxs) {
        for (let firstNeedleCharIdx of firstNeedleCharIdxs) {
            let prevCharIdx = firstNeedleCharIdx;

            for (let j = 1; j < needle.length; j++) {
                const curChar = needle.at(j);
                const curCharIdxs = charIdxs.get(curChar);
                if (curCharIdxs?.has(prevCharIdx + 1)) {
                    prevCharIdx++;
                } else {
                    break;
                }
            }

            if (prevCharIdx - firstNeedleCharIdx === needle.length - 1) {
                return firstNeedleCharIdx;
            }
        }
    }
    
    return -1;
};

