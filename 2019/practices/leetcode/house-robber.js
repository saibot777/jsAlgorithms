/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length < 1) {
        return 0;
    }
    let n = nums.length;
    let A = new Array(n);
    A[0] = nums[0];
    A[1] = Math.max(A[0], nums[1]);
    for (let i = 2; i < n; i++) {
        A[i] = Math.max(A[i - 1], A[i - 2] + nums[i]);
    }
    return A[n-1];
};