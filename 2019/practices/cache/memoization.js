function addTo80(n) {
    console.log('long time');
    return n + 80;
}



function memoizedAddTo80(n) {
    let cache = {};
    return function() {
        if (n in cache) {
            return cache[n];
        } else {
            console.log('long time')
            cache[n] = 5 + 80;
            return cache[n];
        }
    };
}

const memoized = memoizedAddTo80();

console.log('1', memoized(5));
console.log('2', memoized(5));