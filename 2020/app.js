// BIG O

// function sumNumbers(numbers) {
//   return numbers[0] + numbers[1] + numbers[2]; // Constant Time Complexity O(1) - fastest
// }

// console.log(sumNumbers([1, 3, 10]));

// function sumNumbers(numbers) {
//   let result = 0;
//   for (const number of numbers) {
//     result += number; // Linear Time Complexity O(n)
//   }
//   return result;
// }

// console.log(sumNumbers([1, 3, 10, 50]));

// ALGOS

// Fibonnaci
function fib(n) {
  const numbers = [1, 1];
  for (let i = 2; i < n + 1; i++) {
    numbers.push(numbers[i - 2] + numbers[i - 1]); // O(n)
  }
  return numbers[n];
}
// console.log(fib(4));
// console.log(fib(5));

// Prime Numbers
function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrime(5));
// console.log(isPrime(9));

function getMin(numbers) {
  if (!numbers) {
    return "Invalid input";
  }
  let currentMin = numbers[0];
  for (const num of numbers) {
    // O(n)
    if (num < currentMin) {
      currentMin = num;
    }
  }

  return currentMin;
}

console.log(getMin([1, 2, 3]));
console.log(getMin([22, 4, 1]));

function isEven(number) {
  return number % 2 === 0; // O(1)
}

// console.log(isEven(4));
// console.log(isEven(7));

// function isPowerOfTwo(number) {
//   if (number < 1) {
//     return false;
//   }
//   let dividedNumber = number;
//   while (dividedNumber !== 1) {
//     if (dividedNumber % 2 !== 0) {
//       return false;
//     }
//     dividedNumber = dividedNumber / 2; // O(log n)
//   }
//   return true;
// }

// Bitwise version - faster;
function isPowerOfTwo(number) {
  if (number < 1) {
    return false;
  }

  return (number & (number - 1)) === 0; // O(1)
}
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(7));

function factorial(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result = result * i; // O(n)
  }
  return result;
}

console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

function getPermutations(options) {
  const permutations = [];

  if (options.length === 1) {
    return [options];
  }

  const partialPermutations = getPermutations(options.slice(1));

  const firstOption = options[0];

  for (let i = 0; i < partialPermutations.length; i++) {
    const partialPermutation = partialPermutations[i];

    for (let j = 0; j <= partialPermutation.length; j++) {
      const permutationInFront = partialPermutation.slice(0, j);
      const permutationAfter = partialPermutation.slice(j);
      permutations.push(
        permutationInFront.concat([firstOption], permutationAfter)
      );
    }
  }

  return permutations;
}
