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
    };

    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] == 1) {
               res++;
               dfs(i, j); 
            }
        }
    }
    return res;
};