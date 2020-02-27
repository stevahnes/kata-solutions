function sumIntervals(intervals) {
    var sum = 0;
    var sorted = intervals.sort(function (a, b) {
        return a[0] > b[0];
    });
    for (var i = 0; i < sorted.length; i++) {
        if (i < sorted.length - 1 && sorted[i][1] > sorted[i + 1][0]) {
            if (sorted[i][1] > sorted[i + 1][1]) {
                var temp = sorted[i][1];
                sorted[i][1] = sorted[i + 1][0];
                sorted[i + 1][1] = temp;
            } else {
                sorted[i][1] = sorted[i + 1][0];
            }
        }
        sum += (sorted[i][1] - sorted[i][0]);
    }
    return sum;
}