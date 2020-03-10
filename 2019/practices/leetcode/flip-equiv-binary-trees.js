/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
    let dfs = function (n1, n2) {
        if (!n1 && !n2) {
            return true;
        } else if (!n1 || !n2) {
            return false;
        } else if (n1.val != n2.val) {
            return false;
        }

        return (dfs(n1.left, n2.left) && dfs(n1.right, n2.right)) || (dfs(n1.left, n2.right) && dfs(n1.right, n2.left)); 
    }
    return dfs(root1, root2);
};