/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length;
    if (n < 3) {
        return 0;
    }

    let leftMax = new Array(n).fill(0);
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }
    let rightMax = new Array(n).fill(0);
    rightMax[n - 1] = height[n - 1];
    for (let j = n - 2; j >= 0; j--) {
        rightMax[j] = Math.max(rightMax[j + 1], height[j]);
    }

    let res = 0;
    for (let k = 0; k < n; k++) {
        res = res + Math.min(leftMax[k], rightMax[k]) - height[k];
    }
    return res;
};