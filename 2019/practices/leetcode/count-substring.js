/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let n = s.length, total = 2 * n - 1, i = 0;
    let res = 0;
    while(i <= total) {
        let left = Math.floor(i / 2);
        let right = left + i % 2;
        while(left >= 0 && right < n && s.charAt(left) == s.charAt(right)) {
            res++;
            left--;
            right++;
        }
        i++
    }
    return res;
};