/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    let res = [];
    let dfs = function(n, depth) {
        if (!n) {
            return;
        }
        if (depth == res.length) {
            res.push(n.val);
        } else {
            res[depth] = Math.max(res[depth], n.val);
        }

        dfs(n.left, depth + 1);
        dfs(n.right, depth + 1);
    }

    dfs(root, 0);
    return res;
};