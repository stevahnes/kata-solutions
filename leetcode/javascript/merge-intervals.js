/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
    intervals.sort(function (a, b) {
        return a.start - b.start;
    });
    var i = 0;
    while (i < intervals.length) {
        if (i + 1 == intervals.length) {
            break;
        } else if (intervals[i].end >= intervals[i + 1].start) {
            if (intervals[i].end < intervals[i + 1].end) {
                intervals[i].end = intervals[i + 1].end;
            }
            intervals.splice(i + 1, 1);
        } else {
            i++;
        }
    }
    return intervals;
};