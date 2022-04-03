/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const sortedNums = nums.sort((a, b) => a - b);
    let solutions = [];
    let lastNum = null;
    for (let i = 0; i < sortedNums.length; i++) {
        if (sortedNums[i] === lastNum) {
            continue;
        }
        
        let lower = i+1;
        let upper = sortedNums.length - 1;
        
        while (lower < upper) {
            const numsSum = sortedNums[lower] + sortedNums[i] + sortedNums[upper];
            if (numsSum === 0) {
                solutions.push([sortedNums[lower], sortedNums[i], sortedNums[upper]]);
                lastNum = sortedNums[i];
                upper--;
                while (sortedNums[upper] === sortedNums[upper + 1]) {
                    upper--;
                }
            } else if (numsSum < 0) {
                lower++;
                while (sortedNums[lower] === sortedNums[lower - 1]) {
                    lower++;
                }
            } else {
                upper--;
                while (sortedNums[upper] === sortedNums[upper + 1]) {
                    upper--;
                }
            }
        }
    }
    
    return solutions;
};