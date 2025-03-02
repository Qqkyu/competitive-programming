/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let curMostWater = 0;
  let leftLinePtr = 0,
    rightLinePtr = height.length - 1;

  while (leftLinePtr < rightLinePtr) {
    const leftHeight = height[leftLinePtr],
      rightHeight = height[rightLinePtr];
    curMostWater = Math.max(curMostWater, (rightLinePtr - leftLinePtr) * Math.min(leftHeight, rightHeight));
    if (leftHeight < rightHeight) {
      leftLinePtr++;
    } else {
      rightLinePtr--;
    }
  }

  return curMostWater;
}
