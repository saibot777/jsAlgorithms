/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let bs = function(start, end, target) {
        if (start > end) {
            return false;
        }
        let mid = Math.floor((start + end) / 2);
        if (mid * mid == target) {
            return true;
        } else if (mid * mid > target) {
            return bs(start, mid - 1, target);
        } else {
            return bs(mid + 1, end, target);
        }
    }
    for (let a = 0; a * a <= c; a++) {
        let end = c - a * a;
        if (bs(0, end, end)) {
            return true;
        }
    }
    return false;
};