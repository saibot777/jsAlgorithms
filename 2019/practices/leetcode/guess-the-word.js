/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string[]} wordlist
 *     @param {Master} master
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function(wordlist, master) {
    let n = wordlist.length;
    let A = [];
    for (let i = 0; i < n; i++) {
        A.push(new Array(n));
    }
    for (let i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            let m = 0, a = wordlist[i], b = wordlist[j];
            for (let k = 0; k < 6; k++) {
                if (a[k] == b[k]) {
                    m++;
                }
            }
            A[i][j] = A[j][i] = m;
        }
    }

    let takeAGuess = function(possibles) {
        if (possibles.length <= 2) {
            return possibles[0];
        }

        let minOfMax = possibles.length;
        let guess = -1;
        for (let p = 0; p < possibles.length; p++) {
            let i = possibles[p];
            if (!guessed[i]) {
                let groups = [];
                for (let t = 0; t < 7; t++) {
                    groups.push([]);
                }
                for (let t = 0; t < possibles.length; t++) {
                    let j = possibles[t];
                    if (j != i) {
                        let group = A[i][j];
                        groups[group].push(j);
                    }
                }

                let maxGroup = groups[0].length;
                for (let k = 1; k < 7; k++) {
                    if (groups[k].length > maxGroup) {
                        maxGroup = groups[k].length;
                    }
                }

                if (maxGroup < minOfMax) {
                    minOfMax = maxGroup;
                    guess = i;
                }
            }
        }
        return guess;
    }

    let cur = [];
    for (let i = 0; i < n; i++) {
        cur.push(i);
    }
    let guessed = {};
    while(cur.length) {
        let guess = takeAGuess(cur, guessed);
        let matches = master.guess(wordlist[guess]);
        if (matches == 6) {
            return guess;
        }
        let newPossibles = [];
        for (let t = 0; t < cur.length; t++) {
            let j = cur[t];
            if (A[guess][j] == matches) {
                newPossibles.push(j);
            }
        }
        cur = newPossibles;
        guessed[guess] = true;
    }
};