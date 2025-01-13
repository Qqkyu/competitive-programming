function canPlaceFlowers(flowerbed, n) {
  for (
    let currentFlower = 0;
    currentFlower < flowerbed.length && n > 0;
    ++currentFlower
  ) {
    const isCurrentPlotEmpty = !flowerbed[currentFlower];

    if (isCurrentPlotEmpty) {
      const isPreviousPlotEmpty = !flowerbed[currentFlower - 1];
      const isNextPlotEmpty = !flowerbed[currentFlower + 1];

      if (isNextPlotEmpty) {
        if (isPreviousPlotEmpty) {
          --n;
          ++currentFlower;
        }
      } else {
        currentFlower += 2;
      }
    }
  }

  return n === 0;
}
