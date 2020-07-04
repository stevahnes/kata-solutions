/**
 * @param {number[]} digits
 * @return {number[]}
 */
function addOneRecursive(digits) {
  return addOneHelper(digits, digits.length - 1);
}

function addOneHelper(digits, i) {
  let add = digits[i] + 1;
  if (i < 0) {
    return [1].concat(digits);
  }
  if (add % 10 == 0) {
    digits[i] = 0;
    return addOneHelper(digits, --i);
  } else {
    digits[i] = add;
    return digits;
  }
}

/**
 * @param {number[]} digits
 * @return {number[]}
 */
function addOneNonRecursive(digits) {
  let start = digits.length - 1;
  for (let i = start; i >= 0; i--) {
    digits[i] += 1;
    if (digits[i] < 10) {
      return digits;
    } else if (i == 0) {
      digits[i] = 0;
      // concat creates an entirely new copy of an array, so the memory complexity is of N
      return [1].concat(digits);
    } else {
      digits[i] = 0;
    }
  }
}

/**
 * @param {number[]} digits
 * @return {number[]}
 */
function addOneNonRecursiveOptimized(digits) {
  let start = digits.length - 1;
  for (let i = start; i >= 0; i--) {
    digits[i] += 1;
    if (digits[i] < 10) {
      return digits;
    } else if (i === 0) {
      digits[i] = 1;
      digits.push(0);
      return digits;
    } else {
      digits[i] = 0;
    }
  }
}
