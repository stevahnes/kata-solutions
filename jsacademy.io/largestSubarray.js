/**
 * @param {number[]} nums
 * @return {number}
 */
function largestSubarray(nums) {
  let currentSum = nums[0];
  let largestSum = currentSum;
  for (let i = 1; i < nums.length; i++) {
    if (currentSum > 0) {
      currentSum += nums[i];
    } else if (nums[i] > currentSum) {
      currentSum = nums[i];
    }
    if (currentSum > largestSum) {
      largestSum = currentSum;
    }
  }
  return largestSum;
}
