/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    let n = stones.length;

    let UnionFind = function(nm) {
        this.parents = new Array(nm).fill(0);
        this.parents.map((v, idx) => idx);
    };

    UnionFind.prototype.findRoot = function(i) {
        if (this.parents[i] != i) {
            this.parents[i] = this.findRoot(this.parents[i]);
        }
        return this.parents[i];
    };
    UnionFind.prototype.union = function(x, y) {
        let a = this.findRoot(x);
        let b = this.findRoot(y);
        this.parents[a] = b;
    };

    let uf = new UnionFind(20000);

    for (let i = 0; i < n; i++) {
        let s = stones[i];
        uf.union(s[0], s[1] + 10000);
    } 

    let seen = {};

    for (let i = 0; i < n; i++) {
        let s = stones[i];
        let root = uf.findRoot(s[0]);
        seen[root] = true;
    } 

    return n - Object.keys(seen).length;
};