/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
  let curMax = nums[0];
  let evenNegativesProduct = null,
    productSinceLastNegative = null,
    productSinceFirstNegative = null;

  for (let i = 0; i < nums.length; ++i) {
    evenNegativesProduct = (evenNegativesProduct ?? 1) * nums[i];

    if (nums[i] === 0) {
      evenNegativesProduct = null;
      productSinceLastNegative = null;
      productSinceFirstNegative = null;
      curMax = Math.max(curMax, 0);
    } else {
      const maxCandidates = [curMax, evenNegativesProduct];

      if (nums[i] < 0) {
        if (productSinceFirstNegative == null) {
          productSinceFirstNegative = 1;
        } else {
          productSinceFirstNegative *= nums[i];
          maxCandidates.push(productSinceFirstNegative);
        }

        productSinceLastNegative = nums[i];
      } else {
        if (productSinceFirstNegative != null) {
          productSinceFirstNegative *= nums[i];
          maxCandidates.push(productSinceFirstNegative);
        }
        if (productSinceLastNegative != null) {
          productSinceLastNegative *= nums[i];
          maxCandidates.push(productSinceLastNegative);
        }
      }

      curMax = Math.max(...maxCandidates);
    }
  }

  return curMax;
}
