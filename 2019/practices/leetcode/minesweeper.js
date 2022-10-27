/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    let dirs = [1,0,-1,0,1,1,-1,-1,1];
    let n = board.length, m = board[0].length;
    let res = [];
    board.forEach((row) => {
        res.push(row.slice());
    });
    
    let recur = function(x, y, visited) {
        if (visited[x+ ','+y]) {
            return;
        }
        visited[x+ ','+y] = true;
        
        let mines = 0;
        for (let d = 0; d < 8; d++) {
            let nextX = x + dirs[d];
            let nextY = y + dirs[d + 1];
            if (nextX >= 0 && nextX < n && nextY >= 0 && nextY < m && board[nextX][nextY] == 'M') {
                mines++;
            }
        }
        
        if (mines == 0) {
            res[x][y] = 'B';
            for (let d = 0; d < 8; d++) {
                let nextX = x + dirs[d];
                let nextY = x + dirs[d + 1];
                if (nextX >= 0 && nextX < n && nextY >= 0 && nextY < m && board[nextX][nextY] == 'E') {
                    recur(nextX, nextY, visited);
                }
            }
        } else {
            res[x][y] = mines+ ''
        }
    }
    
    let i = click[0], j = click[1];
    if (board[i][j] == 'M') {
        res[i][j] = 'X';
    } else if (board[i][j] == 'E') {
        recur(i, j, {});
    }
    return res;
};