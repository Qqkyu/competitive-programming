function kidsWithCandies(candies, extraCandies) {
  const maxCandies = Math.max(...candies);
  return candies.map(
    (candiesAmount) => candiesAmount + extraCandies >= maxCandies,
  );
}
