function walk(image, ogColor, newColor, i, j) {
  if (image[i]?.[j] !== ogColor) {
    return image;
  }

  image[i][j] = newColor;

  walk(image, ogColor, newColor, i - 1, j);
  walk(image, ogColor, newColor, i, j + 1);
  walk(image, ogColor, newColor, i + 1, j);
  walk(image, ogColor, newColor, i, j - 1);

  return image;
}

function floodFill(image, sr, sc, color) {
  const ogColor = image[sr][sc];
  return ogColor !== color ? walk(image, ogColor, color, sr, sc) : image;
}
