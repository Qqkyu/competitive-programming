/**
 * @param {number[]} fruits
 * @return {number}
 */
function totalFruit(fruits) {
  let firstNumLastIdx = 0,
    secondNumLastIdx = undefined;
  for (let i = 1; i < fruits.length; ++i) {
    if (fruits[i] !== fruits[firstNumLastIdx]) {
      secondNumLastIdx = i;
      break;
    }
    firstNumLastIdx++;
  }

  let curBeg = 0;
  let curMaxInterval = secondNumLastIdx ? secondNumLastIdx + 1 : fruits.length;
  for (let i = secondNumLastIdx + 1; i < fruits.length; ++i) {
    if (fruits[i] === fruits[firstNumLastIdx]) {
      firstNumLastIdx = i;
    } else if (fruits[i] === fruits[secondNumLastIdx]) {
      secondNumLastIdx = i;
    } else {
      if (firstNumLastIdx < secondNumLastIdx) {
        curBeg = firstNumLastIdx + 1;
        firstNumLastIdx = i;
      } else {
        curBeg = secondNumLastIdx + 1;
        secondNumLastIdx = i;
      }
    }
    curMaxInterval = Math.max(i - curBeg + 1, curMaxInterval);
  }

  return curMaxInterval;
}
