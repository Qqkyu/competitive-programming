/**
 * @param {number[]} ums
 * @return {number[][]}
 */
function permute(nums) {
  if (nums.length === 1) {
    return [nums];
  }

  const result = [];

  for (let i = 0; i < nums.length; ++i) {
    const num = nums[i];
    const permutationsWithoutNum = permute(nums.toSpliced(i, 1));

    permutationsWithoutNum.forEach((permutation) => {
      permutation.push(num);
    });

    result.push(...permutationsWithoutNum);
  }

  return result;
}
