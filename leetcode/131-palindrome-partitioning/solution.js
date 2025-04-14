/**
 * @param {string} s
 * @return {string[][]}
 */
function partition(s) {
  const result = [];

  function recurse(curPartition, str) {
    if (str.length === 0) {
      result.push(curPartition);
      return;
    }

    for (let i = 1; i <= str.length; ++i) {
      const substr = str.substring(0, i);

      if (isPalindrome(substr)) {
        recurse([...curPartition, substr], str.substring(i));
      }
    }
  }

  recurse([], s);
  return result;
}

function isPalindrome(s) {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    ++left;
    --right;
  }

  return true;
}
