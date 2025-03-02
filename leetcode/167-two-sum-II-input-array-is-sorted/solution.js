/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
  let leftPtr = 0,
    rightPtr = numbers.length - 1;
  while (numbers[leftPtr] + numbers[rightPtr] !== target) {
    if (target < numbers[leftPtr] + numbers[rightPtr]) {
      rightPtr--;
    } else {
      leftPtr++;
    }
  }
  return [leftPtr + 1, rightPtr + 1];
}
