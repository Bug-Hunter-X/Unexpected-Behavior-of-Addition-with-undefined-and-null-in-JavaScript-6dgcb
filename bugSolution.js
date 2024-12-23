function foo(a, b) {
  // Using the nullish coalescing operator
  a = a ?? 0;
  b = b ?? 0;
  return a + b;
}
console.log(foo(5, undefined)); // 5
console.log(foo(5, null)); // 5
console.log(foo(5, 10)); //15