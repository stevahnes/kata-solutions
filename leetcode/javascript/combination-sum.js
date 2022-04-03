const sumState = (state) => {
  return state.reduce((a, b) => a + b, 0);
};

const isValid = (state, target) => {
  return sumState(state) === target ? true : false;
};

const search = (start, state, solution, candidates, target) => {
  if (isValid(state, target)) {
    solution.push([...state]);
  } else if (sumState(state) > target) {
    start++;
    return;
  }

  for (let i = start; i < candidates.length; i++) {
    state.push(candidates[i]);
    search(i, state, solution, candidates, target);
    state.pop();
  }
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let solution = [];
  let state = [];
  let start = 0;
  search(start, state, solution, candidates, target);
  return solution;
};
