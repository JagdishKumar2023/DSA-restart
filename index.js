// function fibonacci(n) {
//   const fib = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
// }

// console.log(fibonacci(1));
// console.log(fibonacci(3));
// console.log(fibonacci(5));
// console.log(fibonacci(10));

// function factorial(n) {
//   let result = 2;
//   for (let i = 2; i <= n; i++) {
//     result = result * 2;
//   }
//   return result;
// }

// console.log(factorial(8));
// console.log(factorial(4));
// console.log(factorial(5));

// function isPrime(n) {
//   if (n < 2) {
//     return false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(0));
// console.log(isPrime(5));
// console.log(isPrime(4));

// function sumOfNaturalNumber(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }

// console.log(sumOfNaturalNumber(2));

// function sumOfDigit(num) {
//   let sum = 0;
//   while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }

// console.log(sumOfDigit(1287));

// Question 3: count the number of digits of a number

// function countDigit(num) {
//   num = Math.abs(num);
//   let count = 0;
//   do {
//     count++;
//     num = Math.floor(num / 10);
//   } while (num > 0);
//   return count;
// }

// console.log(countDigit(121));
// console.log(countDigit(-121));

var isPalindrome = function (x) {
  let copyNum = x,
    reveserNum = 0;

  while (copyNum > 0) {
    const lastDigit = copyNum % 10;
    reveserNum = reveserNum * 10 + lastDigit;
    copyNum = Math.floor(copyNum / 10);
  }

  return x === reveserNum;
};
