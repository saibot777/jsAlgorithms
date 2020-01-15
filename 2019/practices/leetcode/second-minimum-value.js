/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
    let minV = root.val;
    let res = Number.MAX_SAFE_INTEGER;
    let dfs = function(node) {
        if (!node) {
            return;
        }
        if (node.val == minV) {
            dfs(node.left);
            dfs(node.right);
        } else if (node.val > minV && node.val < res) {
            res = node.val;
        }
    }
    dfs(root);
    return res == Number.MAX_SAFE_INTEGER ? 1 : res;
};