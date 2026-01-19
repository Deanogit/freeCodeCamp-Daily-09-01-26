// Circular Prime
// Given an integer, determine if it is a circular prime.

// A circular prime is an integer where all rotations of its digits are themselves prime.

// For example, 197 is a circular prime because all rotations of its digits: 197, 971, and 719, are prime numbers.

// function isCircularPrime(n) {
//   console.log(n);

//   // How to rotate through
//   // 197
//   // 971
//   // 719

//   // split
//   const split = n.split('');

//   // for (let i = 0; i < n.length; i++) {}

//   console.log(split.length);

//   // check for primes
//   // return n;
// }

// function isCircularPrime(n) {
//   // console.log(typeof n)

//   // isPrime
//   let isPrime = true;

//   // How to rotate through
//   // 197
//   // 971
//   // 719

//   // Number to string
//   const str = n.toString();

//   // split
//   const split = str.split('');
//   console.log(split.length);

//   for (let i = 0; i < str.length - 1; i++) {
//     // change order
//     let check = str.split(1) + str[0];
//     // use helper checking function
//   }

//   return isPrime;
//   // check for primes
//   // return n;
// }

// function checkPrime(n) {
//   // A number is prime if it’s greater than 1 and not divisible by any number from 2 up to its square root.
//   if (n > 1) {
//     for (let i = 2; i < Math.sqrt(n); i++) {
//       // not divisible by i
//       n % i === 0 ? true : false;
//     }
//   }
// }

function isCircularPrime(n) {
  // console.log(typeof n)

  // isPrime
  let isPrime = true;

  // How to rotate through
  // 197
  // 971
  // 719

  // Number to string
  const str = n.toString();

  // split
  const split = str.split('');
  console.log(split.length);

  for (let i = 0; i < str.length - 1; i++) {
    // change order
    let check = str.split(1) + str[0];
    // use helper checking function
  }

  return isPrime;
  // check for primes
  // return n;
}

function checkPrime(n) {
  // A number is prime if it’s greater than 1 and not divisible by any number from 2 up to its square root.

  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // not divisible by i
    n % i === 0 ? false : true;
  }
}
