function findFactorialRecursive(number) {
    if (number === 2) {
        return 2;
    }

    return number * findFactorialRecursive(number - 1);
}

console.log(findFactorialRecursive(5), 'Recursive');

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

console.log(findFactorialIterative(5), 'Iterative');