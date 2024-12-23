# Unexpected Behavior of Addition with undefined and null in JavaScript

This repository demonstrates the unexpected behavior of the addition operator (+) in JavaScript when used with undefined and null values.

## Bug Description
In JavaScript, adding a number to undefined results in NaN (Not a Number), while adding a number to null results in the number itself. This behavior might be counter-intuitive and could lead to hard-to-detect errors in your code.

## Code Sample (bug.js)
```javascript
function foo(a,b){    return a+b;}
console.log(foo(5,undefined)); //NaN
console.log(foo(5,null)); //5
```

## Solution (bugSolution.js)
To avoid this unexpected behavior, always check for undefined and null values before performing arithmetic operations.  You can use a conditional statement, or the nullish coalescing operator (??).
```javascript
function foo(a, b) {
  // Using the nullish coalescing operator
  a = a ?? 0;
  b = b ?? 0;
  return a + b;
}
console.log(foo(5, undefined)); // 5
console.log(foo(5, null)); // 5
console.log(foo(5, 10)); //15
```