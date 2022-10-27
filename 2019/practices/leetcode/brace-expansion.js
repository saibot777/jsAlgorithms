/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function(expression) {
    let combine = function (a, b) {
        if (a.length == 0) {
            return b;
        } else if (b.length == 0) {
            return a;
        }

        let res = [];
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < b.length; j++) {
                res.push(a[i] + b[j]);
            }
        }
        return res;
    };
    let stack = [], beforeComma = [], cur = [];
    for (let i = 0; i < expression.length; i++) {
        let c = expression[i];
        if ((/[a-z]/i).test(c)) {
            if (cur.length > 0) {
                cur = cur.map(v => v + c);
            } else {
                cur.push(c);
            }
            
        } else if (c == '{') {
            stack.push(beforeComma);
            stack.push(cur);
            beforeComma = [];
            cur = [];
        } else if(c == ',') {
            beforeComma = beforeComma.concat(cur);
            cur = [];
        } else if (c == '}') {
            let preCur = stack.pop();
            let preBeforeComma = stack.pop();
            cur = combine(preCur, beforeComma.concat(cur));
            beforeComma = preBeforeComma;
        }
    }

    let res = {};
    (beforeComma.concat(cur)).forEach(v => res[v] = true);
    return Object.keys(res).sort();
};