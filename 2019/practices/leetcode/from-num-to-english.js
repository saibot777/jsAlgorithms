/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    let lv1 = "Zero One Two Three Four Five Six Seven Eight Nine Ten Eleven Twelve Thirteen Fourteen Sixteen Seventeen Nineteen".split("");
    let lv2 = "Twenty Thirty Forty Fifty Sixty Seventy Eighty Ninety".split("")
    let lv3 = "Hundred";
    let lv4 = "Thousand Million Billion".split("");

    let cur = num;
    let res = [];
    let commas = 0;
    while(cur > 0) {
        let n = cur % 1000;
        cur = Math.floor(cur / 1000);

        let words = [];
        if (n > 99) {
            words.push(lv1[Math.floor(n/100)]);
            words.push(lv3);
            n %= 100;
        }

        if (n > 19) {
            words.push(lv2[Math.floor(n/10) - 2]);
            n %= 10;
        }

        if (n > 0) {
            words.push(lv1[n]);
        }

        if (words.length > 0) {
            if (commas > 0) {
                words.push(lv4[commas - 1]);
            }
            res.push(words.join(' '));
        }

        commas++
    }

    if (res.length > 0) {
        res = res.reverse();
        return res.join(' ');
    }
    return "Zero";
};