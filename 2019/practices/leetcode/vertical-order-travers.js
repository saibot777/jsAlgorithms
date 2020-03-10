/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    let m = {};
    let dfs = function (n, x, y) {
        if (!n) {
            return;
        }

        if (m[x] === undefined) {
            m[x] = {};
            m[x][y] = [n.val];
        } else if (m[x][y] === undefined) {
            m[x][y] = [n.val];
        } else {
            m[x][y].push(n.val);
        }

        dfs(n.left, x - 1, y + 1);
        dfs(n.right, x + 1, y + 1);
    }
    dfs(root, 0, 0);
    let keys = Object.keys(m).sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < keys.length; i++) {
        let my = m[keys[i]];
        let yKeys = Object.keys(my).sort((a, b) => a - b);
        let tmp = [];
        for (let j = 0; j < yKeys.length; j++) {
            my[yKeys[j]].sort((a, b) => a-b);
            tmp = tmp.concat(my[yKeys[j]]);
        }
        res.push(tmp);
    }
    return res;
};