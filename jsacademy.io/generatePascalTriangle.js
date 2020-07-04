/**
 * @param {number} n
 * @return {number[][]}
 */
function generate(n) {
  if (n === 0) {
    return [[1]];
  } else if (n === 1) {
    return [[1], [1, 1]];
  } else {
    let res = [[1], [1, 1]];
    for (let i = 2; i < n + 1; i++) {
      let layer = [1];
      let len = res.length;
      for (let j = 1; j < len; j++) {
        layer.push(res[i - 1][j] + res[i - 1][j - 1]);
      }
      layer.push(1);
      res.push(layer);
    }
    return res;
  }
}
