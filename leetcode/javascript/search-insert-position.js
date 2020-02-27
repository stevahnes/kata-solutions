/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (nums.length == 0) {
        return 0;
    } else {
        for (var i = 0; i < nums.length; i++) {
            if (nums[i] >= target) {
                return i;
                break;
            } else if (i + 1 == nums.length) {
                return i + 1;
            }
        }
    }
};