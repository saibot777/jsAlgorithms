/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
    let n = nums.length, dp = [];
    for (let i = 0; i <= n; i++) {
        dp.push(new Array(m + 1).fill(Number.MAX_SAFE_INTEGER));
    }
    let subSum = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        subSum[i + 1] = subSum[i] + nums[i];
    }
    dp[0][0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            for (let k = 0; k < i; k++) {
                dp[i][j] = Math.min(dp[i][j], Math.max(dp[k][j - 1], subSum[i] - subSum[k]));
            }
        }
    }
    return dp[n][m];
};