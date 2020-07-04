/**
 * @param {number[]} nums
 * @return {number[]}
 */
function moveZeroes(nums) {
  let zero = null;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0) {
      // get the first zero to begin tracking
      if (zero === null) {
        zero = i;
      }
      // if next number is non-zero
      if (nums[i + 1] !== 0) {
        // swap with the last known zero
        nums[zero] = nums[i + 1];
        nums[i + 1] = 0;
        // move tracker up by one, which is guaranteed to be another zero
        zero++;
      }
    }
  }
  return nums;
}
