// First solution
function hasPairWithSum(arr, sum) {
    const len =  arr.length;
    for(let i=0; i<len - 1; i++) {
        for(let j = i+1; j < len; j++) {
            if (arr[i] + arr[j] === sum) {
                return true;
            }
        }
    }
    return false;
}

console.log(hasPairWithSum([6, 4, 3, 2, 1, 7], 9))