/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let n = grid.length, m = grid[0] ? grid[0].length : 0;

    let dfs = function(x, y) {
        if (x < 0 || x >= n || y < 0 || y >= m || grid[x][y] == 0) {
            return;
        }
        grid[x][y] = 0;
        dfs(x - 1, y);
        dfs(x, y - 1);
        dfs(x + 1, y);
        dfs(x, y + 1);
    }
};