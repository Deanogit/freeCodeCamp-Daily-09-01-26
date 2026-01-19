// Circular Prime
// Given an integer, determine if it is a circular prime.

// A circular prime is an integer where all rotations of its digits are themselves prime.

// For example, 197 is a circular prime because all rotations of its digits: 197, 971, and 719, are prime numbers.

function isCircularPrime(n) {
  console.log(n);

  // How to rotate through
  // 197
  // 971
  // 719

  // split
  const split = n.split('');

  // for (let i = 0; i < n.length; i++) {}

  console.log(split.length);

  // check for primes
  // return n;
}
