/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let l = 1, r = num;
    while(l <= r) {
        let mid = Math.floor((l + r) / 2);
        let tmp = mid * mid;
        if (tmp == num) {
            return true;
        } else if (tmp > num) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return false;
};