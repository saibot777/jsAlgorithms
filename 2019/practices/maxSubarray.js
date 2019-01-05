function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }

    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

function solution(M, A) {
    if (M > A.length) {
        return null;
    }

    let max = -Infinity;

    for (let i = 0; i < A.length - M + 1; i++) {
        temp = 0;
        for (let j = 0; j < M; j++) {
            temp += A[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

console.log(solution(3, [2,6,9,2,1,8,5,6,3])); // returns 19;