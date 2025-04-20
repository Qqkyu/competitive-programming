/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
function asteroidCollision(asteroids) {
  const stack = [];
  asteroids.forEach((asteroid) => {
    if (stack.length > 0 && willCollide(asteroid, stack.at(-1))) {
      while (stack.length > 0 && willCollide(asteroid, stack.at(-1)) && Math.abs(asteroid) > Math.abs(stack.at(-1))) {
        stack.pop();
      }

      if (stack.length === 0 || !willCollide(asteroid, stack.at(-1))) {
        stack.push(asteroid);
      } else if (Math.abs(stack.at(-1)) === Math.abs(asteroid)) {
        stack.pop();
      }
    } else {
      stack.push(asteroid);
    }
  });
  return stack;
}

function willCollide(a, b) {
  return a < 0 && b > 0;
}
