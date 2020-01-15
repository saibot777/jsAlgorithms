/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let i = 0; n = intervals.length, res = [];
    if (n < 1) {
        res.push(newInterval);
        return res;
    }

    while(i < n && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i]);
        i++;
    }

    if (i == n) {
        res.push(newInterval);
        return res;
    }

    let first = intervals[i], second = newInterval;
    while(i < n && first[0] <= second[1]) {
        second = [Math.min(first[0], second[0]), Math.max(first[1], second[1])];
        i++;
        first = intervals[i];
    }

    res.push(second);

    while(i < n) {
        res.push(intervals[i]);
        i++;
    }

    return res;
};