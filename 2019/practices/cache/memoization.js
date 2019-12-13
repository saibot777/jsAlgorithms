function addTo80(n) {
    console.log('long time');
    return n + 80;
}

let cache = {
    5: 85
};

function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n];
    } else {
        console.log('long time')
        cache[n] = 5 + 80;
        return cache[n];
    }
}

console.log(memoizedAddTo80(5));