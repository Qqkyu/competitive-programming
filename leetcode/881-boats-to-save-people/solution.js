/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
function numRescueBoats(people, limit) {
  let result = 0;
  people.sort((a, b) => a - b);

  for (let left = 0, right = people.length - 1; left <= right; --right) {
    if (people[left] + people[right] <= limit) {
      ++left;
    }

    result++;
  }

  return result;
}
