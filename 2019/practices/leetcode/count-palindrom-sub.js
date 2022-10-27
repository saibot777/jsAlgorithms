/**
 * @param {string} S
 * @return {number}
 */
var countPalindromicSubsequences = function(S) {
    if (!S || S.length < 2) {
        return S.length;
    }

    let modulo = 1000000007, n = S.length;
    let dp = new Array(4);
    for (let i = 0; i < 4; i++) {
        dp[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            dp[i][j] = new Array(n).fill(0);
        }
    }

    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            for (let k = 0; k < 4; k++) {
                let c = 'a'.charCodeAt(0) + k;
                if (i == j) {
                    if (S.charCodeAt(i) == c) {
                        dp[k][i][j] = 1;
                    } else {
                        dp[k][i][j] = 0;
                    }
                } else {
                    if (S.charCodeAt(i) != c) {
                        dp[k][i][j] = dp[k][i + 1][j]; 
                    } else if (S.charCodeAt(j) != c) {
                        dp[k][i][j] = dp[k][i][j - 1];
                    } else {
                        if (j == i + 1) {
                            dp[k][i][j] = 2;
                        } else {
                            dp[k][i][j] = 2;
                            for (let m = 0; m < 4; m++) {
                                dp[k][i][j] += dp[m][i + 1][j - 1];
                                dp[k][i][j] %= modulo;
                            }
                        }
                    }
                }
            }
        }
    }

    let res = 0;
    for (let i = 0; i < 4; i++) {
        res += dp[i][0][n - 1];
    }
    return res %= modulo;
};