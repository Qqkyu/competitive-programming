/**
 * @param {number[]} nums
 * @return {string}
 */
function largestNumber(nums) {
  // b - a sorts numbers descending
  // a < b: result > 0 (b comes first)
  // a = b: result = 0 (a and b are equal)
  // a > b: result < 0 (a comes first)
  const result = nums
    .map((num) => num.toString())
    .toSorted((a, b) => b + a - (a + b))
    .join("");
  if (result[0] === "0") {
    return "0";
  }
  return result;
}
