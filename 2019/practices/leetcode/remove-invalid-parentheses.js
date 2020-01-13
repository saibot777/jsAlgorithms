/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    if (s.length < 1) {
        return [""];
    }
    let res = [];
    let min_n = s.length;
    let recur = function(i, l_c, r_c, cur, ignored_n) {
        if (i == s.length) {
            if (l_c == r_c && ignored_n) {
                if (ignored_n < min_n) {
                    res = [];
                    min_n = ignored_n;
                }
                let valid_expr = cur.slice().join("");
                let e = false;
                for (let j = 0; j < res.length; j++) {
                    if (valid_expr == res[j]) {
                        e = true;
                        break;
                    }
                }
                if(!e) {
                    res.push(valid_expr);
                }
            }
            
        } else {
            if (s[i] != "(" && s[i] != ")") {
                cur.push(s[i]);
                recur(i + 1, l_c, r_c, cur, ignored_n);
                cur.pop(s[i]);
            } else {
                recur(i + 1, l_c, r_c, cur, ignored_n + 1);

                cur.push(s[i]);
                if (s[i] == "(") {
                    recur(i + 1, l_c + 1, r_c, cur, ignored_n);
                } else if (r_c < l_c){
                    recur(i + 1, l_c, r_c + 1, cur, ignored_n);
                }
                cur.pop;
            }
        }
    }
    recur(0, 0, 0, [], 0);
    return res;
};