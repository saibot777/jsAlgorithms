/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    for (let i = S.length - 1, j = T.length - 1; i--, j--;) {
        let back = 0;
        while (i >= 0 && (S[i] == '#' || back > 0)) {
            if (S[i] == '#') {
                back++;
            } else {
                back--;
            }
            i--;
        }

        while (j >= 0 && (T[j] == '#' || back > 0)) {
            if (T[j] == '#') {
                back++;
            } else {
                back--;
            }
            j--;
        }

        if (i == -1 && j == -1) {
            return true;
        } else if (i == -1 || j == -1) {
            return false;
        } else if (S[i] != T[j]) {
            return false;
        }
    }
    return true;
};

