function dailyTemperatures(temperatures) {
  const result = new Array(temperatures.length);

  const stack = [];
  for (let i = temperatures.length - 1; i >= 0; --i) {
    const num = temperatures[i];
    while (stack.length && num >= temperatures[stack.at(-1)]) {
      stack.pop();
    }

    if (stack.length) {
      result[i] = stack.at(-1) - i;
    } else {
      result[i] = 0;
    }

    stack.push(i);
  }

  return result;
}
