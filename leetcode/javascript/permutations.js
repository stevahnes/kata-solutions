const getSubNums = (nums, index) => {
  const subNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (i !== index) {
      subNums.push(nums[i]);
    }
  }
  return subNums;
};

const search = (state, solution, nums, targetLength) => {
  if (state.length === targetLength) {
    solution.push([...state]);
  }

  for (let i = 0; i < nums.length; i++) {
    state.push(nums[i]);
    search(state, solution, getSubNums(nums, i), targetLength);
    state.pop();
  }
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let state = [];
  let solution = [];
  const targetLength = nums.length;
  search(state, solution, nums, targetLength);
  return solution;
};
