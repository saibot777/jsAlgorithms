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
var countNodes = function(root) {
    if (!root) {
        return 0;
    }
    let depth = 0; cur = root;
    while (cur.left) {
        depth++;
        cur = cur.left;
    }
    if (depth == 0) {
        return 1;
    }

    let exist = function (idx) {
        let cur = root;
        let left = 0, right = Math.pow(2, depth) - 1;
        for (let i = 0; i < depth; i++) {
            let mid = Math.floor((left + right) / 2);
            if (idx > mid) {
                cur = cur.right;
                left = mid + 1;
            } else {
                cur = cur.left;
                right = mid;
            }
        }

        return cur != null;
    };

    let l = 1; r = Math.pow(2, depth) - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (exist(mid)) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return Math.pow(2, depth) - 1 + l;
};