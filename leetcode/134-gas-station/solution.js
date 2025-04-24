/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
function canCompleteCircuit(gas, cost) {
  let startStation = 0,
    curTank = 0,
    totalTank = 0;
  for (let i = 0; i < gas.length; ++i) {
    totalTank += gas[i] - cost[i];
    curTank += gas[i] - cost[i];

    if (curTank < 0) {
      startStation = i + 1;
      curTank = 0;
    }
  }

  return totalTank < 0 ? -1 : startStation;
}
