## Circular Prime Detector

A mathematical utility that determines if a number is a Circular Prime - a prime number where every possible rotation of its digits is also a prime number.

### The Logic

This challenge requires a dual-layered approach to handle both the mathematical and structural requirements:

1. The Primality Shield

Before checking rotations, we need a reliable way to check if a single number is prime. the `checkPrime` function uses Trial Division optimised by checking divisors only up to the square root of the number (`Math.sqrt()`).

2. The Rotation Carousel

To "rotate" the number, we treat it as a string. By taking everything except the first character (`str.slice(1)`) and appending that first character (`str[0]`) to the end, we simulate a circular shift.

### Implementation

```JavaScript

function isCircularPrime(n) {
    let str = n.toString();

    for (let i = 0; i < str.length; i ++) {
        // 1. If any rotation fails the prime check, return false immediately
        if (!checkPrime(Number(str))) return false;

        // 2. Rotate the digits for the next iteration
        str = str.slice(1) + str[0];
    }

    return true;
}

function checkPrime(n) {
    if (n <= 1) return false;
    // optimise by only checking up to the square root
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
```

### What I Learned

1. Abstraction with Helper Functions

I learned that "Separation of Concerns" makes code easier to debug. By moving the prime logic into its own function, the main `isCircularPrime` function stays clean and focused only on the rotation logic.

2. String-Number Interoperability

I practised switching between types. I used `.toString()` to enable string manipulation for the rotation and `Number()` to convert the text back into a digit for mathematical evaluation.

3. State Maintenance in Loops

I reinforced the importance of variable assignment. In previous attempts, the string wasn't updating; now, by setting `str = str.slice(1) + str[0]`, each iteration of the loop works with the result of the previous rotation.
