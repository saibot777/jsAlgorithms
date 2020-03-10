/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let keyFreq = {};
    nums.forEach(num => {
        if (!keyFreq[num]) {
            keyFreq[num] = 1;
        } else {
            keyFreq[num]++;
        }
    });

    let freqKey = {};
    for (let key in keyFreq) {
        let freq = keyFreq[key];
        if (!freqKey[freq]) {
            freqKey[freq] = [];
        }
        freqKey[freq].push(key);
    }

    let sortedFreqs = Object.keys(freqKey).sort((a, b) => b - a);
    let res = [];
    for (let i = 0, resK = 0; i < sortedFreqs.length; i++) {
        let freq = sortedFreqs[i];
        let keys = freqKey[freq];
        for (let j = 0; j < keys.length && resK < k; j++) {
            res.push(keys[j]);
            resK++;
        }
    }

    return res;
};