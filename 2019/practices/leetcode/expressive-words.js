/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(S, words) {
    let isStrechy = function(w) {
        let i = 0, j = 0;
        while(i < S.length && j < w.length) {
            let c1 = S[i], c2 = w[j];
            if (c1 != c2) {
                return false;
            }
            
            let e1 = i, e2 = j;
            while(e1 < S.length && S[e1] == c1) {
                e1++;
            }
            while(e2 < w.length && w[e2] == c2) {
                e2++;
            }
            
            let n1 = e1 - i, n2 = e2 - j;
            if (n1 < n2 || (n1 < 3 && n1 != n2)) {
                return false;
            }
            i = e1;
            j = e2;
        }
        if (i == S.length && j == w.length) {
            return true;
        } else {
            return false;
        }
    };
    
    let res = 0;
    words.forEach(w => {
        if (isStrechy(w)) {
            res++;
        }
    });
    return res;
};