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
console.log(fib(4));
console.log(fib(5));

// Prime Numbers
function isPrime(number) {
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(5));
console.log(isPrime(9));
