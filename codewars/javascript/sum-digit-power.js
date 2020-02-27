function sumDigPow(a, b) {
    var solution = [];
    if (a < 10 && b < 89) {
        for (var i = a; i < 10; i++) {
            solution.push(i);
        }
    } else {
        for (var i = a; i < b + 1; i++) {
            var sum = 0;
            var rem = i;
            while (Math.floor(rem) !== 0) {
                sum += Math.pow(rem % 10, rem.toString().length);
                rem = Math.floor(rem / 10);
            }
            if (sum === i) {
                solution.push(i);
            }
        }
    }
    return solution;
}