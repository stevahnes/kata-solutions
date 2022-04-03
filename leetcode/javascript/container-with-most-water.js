/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let frontPointer = 0;
  let backPointer = height.length - 1;
  let maxFrontPointer = frontPointer;
  let maxBackPointer = backPointer;
  // calculate base area
  const baseArea =
    Math.min(height[maxFrontPointer], height[maxBackPointer]) *
    (maxBackPointer - maxFrontPointer);
  let currentArea = baseArea;
  while (frontPointer < backPointer) {
    // calculate possible new areas
    const moveFrontArea =
      Math.min(height[frontPointer + 1], height[backPointer]) *
      (backPointer - frontPointer - 1);
    const moveBackArea =
      Math.min(height[frontPointer], height[backPointer - 1]) *
      (backPointer - frontPointer - 1);
    const moveBothArea =
      Math.min(height[frontPointer + 1], height[backPointer - 1]) *
      (backPointer - frontPointer - 2);
    // decide which pointer(s) to move
    if (currentArea < moveFrontArea) {
      frontPointer++;
      maxFrontPointer++;
    } else if (currentArea < moveBackArea) {
      backPointer--;
      maxBackPointer--;
    } else if (currentArea < moveBothArea) {
      frontPointer++;
      backPointer--;
      maxFrontPointer++;
      maxBackPointer--;
    } else {
      if (height[frontPointer] < height[backPointer]) {
        frontPointer++;
      } else if (height[frontPointer] > height[backPointer]) {
        backPointer--;
      } else if (height[backPointer - 1] > height[backPointer]) {
        backPointer--;
      } else {
        frontPointer++;
      }
    }
    // get the new max area
    currentArea = Math.max(
      currentArea,
      moveFrontArea,
      moveBackArea,
      moveBothArea
    );
  }
  return currentArea;
};
