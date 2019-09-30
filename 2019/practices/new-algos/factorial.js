function findFactorialRecursive(number) {
    return answer;
}

function findFactorialIterative(number) {
    let answer = 1;

    if (number === 2) {
        answer = 2;
    }

    for (let i = 2; i <= number; i++) {
        answer = answer * i;
    }

    return answer;
}

console.log(findFactorialIterative(5));