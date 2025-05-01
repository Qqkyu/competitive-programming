/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
function leastInterval(tasks, n) {
  const frequency = new Array(26).fill(0);
  tasks.forEach((task) => {
    frequency[task.charCodeAt(0) - 65]++;
  });
  frequency.sort((a, b) => a - b);

  const spacesBetween = frequency[25] - 1;
  let idleSlots = spacesBetween * n;

  for (let i = 24; i >= 0 && frequency[i] > 0; --i) {
    idleSlots -= Math.min(frequency[i], spacesBetween);
  }

  return idleSlots > 0 ? idleSlots + tasks.length : tasks.length;
}
